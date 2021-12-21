import React from 'react';
import { Box } from '@mui/system';
import {
	Typography,
	Drawer,
	AppBar,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Avatar,
} from '@mui/material';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import {
	useHistory,
	useLocation,
} from 'react-router-dom/cjs/react-router-dom.min';
import { format } from 'date-fns';

const drawerwidth = 240;

const menuItems = [
	{
		text: 'My Notes',
		icon: <SubjectOutlined color="secondary" />,
		path: '/',
	},
	{
		text: 'Create Note',
		icon: <AddCircleOutlineOutlined color="secondary" />,
		path: '/create',
	},
];

export default function Layout({ children }) {
	const history = useHistory();
	const location = useLocation();

	return (
		<Box sx={{ background: '#f9f9f9', display: 'flex' }}>
			<AppBar elevation={0} sx={{ width: `calc(100% - ${drawerwidth}px)` }}>
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }}>
						Today is the {format(new Date(), 'do MMMM Y')}
					</Typography>
					<Typography>Mario</Typography>
					<Avatar src="/maya computer.jpg" sx={{ marginLeft: 2 }} />
				</Toolbar>
			</AppBar>
			<Toolbar />
			<Drawer
				sx={{
					width: drawerwidth,
					'& .MuiDrawer-paper': {
						width: drawerwidth,
						boxSizing: 'border-box',
					},

					'& .Mui-selected:hover': {
						backgroundColor: '#f1f1f1',
					},
					'& .Mui-selected': {
						backgroundColor: '#f1f1f1',
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<div>
					<Typography variant="h5" sx={{ color: 'secondary.main', padding: 3 }}>
						Notes Ninja
					</Typography>
				</div>
				<List>
					{menuItems.map((item) => (
						<ListItemButton
							selected={location.pathname === item.path ? true : false}
							key={item.text}
							onClick={() => history.push(item.path)}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<div>{children}</div>
		</Box>
	);
}
