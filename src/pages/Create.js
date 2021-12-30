import React, { useState } from 'react';
import {
	Container,
	Button,
	Typography,
	TextField,
	Radio,
	RadioGroup,
	FormControlLabel,
	FormLabel,
	FormControl,
	Box,
	styled
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useHistory } from 'react-router-dom';
const SpaceDiv = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function Create() {
	const [title, setTitle] = useState('');
	const [details, setDetails] = useState('');
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState('money');
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitleError(false);
		setDetailsError(false);
		if (title === '') {
			setTitleError(true);
		}

		if (details === '') {
			setDetailsError(true);
		}
		if (title && details) {
			fetch('http://localhost:8000/notes', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify({ title, details, category }),
			}).then(() => history.push('/'));
		}
	};
	return (
		<Container>
			<SpaceDiv />
			<Box sx={{ width: '100%', height: '100vh' }}>
				<Typography
					variant="h6"
					color="textSecondary"
					component="h2"
					gutterBottom
				>
					Create a New Note
				</Typography>
				<form noValidate autoComplete="off" onSubmit={handleSubmit}>
					<TextField
						onChange={(e) => setTitle(e.target.value)}
						label="Note Title"
						variant="outlined"
						fullWidth
						required
						sx={{ marginTop: '40px', marginBottom: '30px', display: 'block' }}
						error={titleError}
					/>
					<TextField
						onChange={(e) => setDetails(e.target.value)}
						label="Detailed"
						variant="outlined"
						fullWidth
						multiline
						rows={4}
						required
						sx={{ marginTop: '40px', marginBottom: '30px', display: 'block' }}
						error={detailsError}
					/>
					<FormControl
						sx={{ marginTop: '40px', marginBottom: '30px', display: 'block' }}
					>
						<FormLabel>Note Category</FormLabel>
						<RadioGroup
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						>
							<FormControlLabel
								value="money"
								control={<Radio />}
								label="Money"
							/>
							<FormControlLabel
								value="todos"
								control={<Radio />}
								label="Todos"
							/>
							<FormControlLabel
								value="reminders"
								control={<Radio />}
								label="Reminders"
							/>
							<FormControlLabel value="work" control={<Radio />} label="Work" />
						</RadioGroup>
					</FormControl>
					<Button
						type="submit"
						color="secondary"
						variant="contained"
						// startIcon={<SendIcon />}
						endIcon={<KeyboardArrowRightIcon />}
					>
						Submit
					</Button>
				</form>
			</Box>
		</Container>
	);
}
