import React, { useEffect, useState } from 'react';
import { Grid, Container, styled, Box, useMediaQuery } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import NoteCard from '../components/NoteCard';
const SpaceDiv = styled('div')(({ theme }) => theme.mixins.toolbar);
export default function Notes() {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		fetch('http://localhost:8000/notes')
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []);

	const handleDelete = async (id) => {
		await fetch(`http://localhost:8000/notes/${id}`, {
			method: 'DELETE',
		});

		const newNotes = notes.filter((note) => note.id != id);
		setNotes(newNotes);
	};

	return (
		<Container sx={{width: '100%'}}>
			<SpaceDiv />
			<Masonry>
				{notes.map((note) => (
					<Box key={note.id}>
						<NoteCard note={note} handleDelete={handleDelete} />
					</Box>
				))}
			</Masonry>
		</Container>
	);
}
