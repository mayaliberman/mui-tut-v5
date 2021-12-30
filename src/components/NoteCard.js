import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	IconButton,
	Typography,
	styled,
	Avatar,
} from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { blue, green, pink, yellow } from '@mui/material/colors';

const StyledAvatar = styled(Avatar)(({ category, theme }) => ({
	backgroundColor: blue[500],
	...(category === 'work' && {
		backgroundColor: yellow[700],
	}),

	...(category === 'money' && {
		backgroundColor: green[500],
	}),
	...(category === 'todos' && {
		backgroundColor: pink[500],
	}),
	
}));

export default function NoteCard({ note, handleDelete }) {
	return (
		<div>
			<Card
				elevation={0}
				variant="outlined"
				sx={{ minWidth: 275, minHeight: 200, margin: 2 }}
			>
				<CardHeader
					avatar={
						<StyledAvatar category={note.category}>
							{note.category[0].toUpperCase()}
						</StyledAvatar>
					}
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
			</Card>
		</div>
	);
}
