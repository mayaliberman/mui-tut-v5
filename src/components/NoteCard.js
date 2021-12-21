import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	IconButton,
	Typography,
	styled,
} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

const StyledCard = styled(Card, {
	shouldForwardProp: (prop) => prop.category !== 'work',
})(({ category, theme }) => ({
	padding: theme.spacing(2),
	...(category === 'work' && {
		border: '1px solid red',
	}),
}));

export default function NoteCard({ note, handleDelete }) {
	return (
		<div>
			<StyledCard
				elevation={1}
				variant="outlined"
				sx={{ minWidth: 275, minHeight: 200, margin: 2 }}
				category={note.category}
			>
				<CardHeader
					action={
						<IconButton onClick={() => handleDelete(note.id)}>
							<DeleteOutline />
						</IconButton>
					}
					title={note.title}
					subheader={note.category}
				/>
				<CardContent>
					<Typography variant="body2" color="textSecondary">
						{note.details}
					</Typography>
				</CardContent>
			</StyledCard>
		</div>
	);
}
