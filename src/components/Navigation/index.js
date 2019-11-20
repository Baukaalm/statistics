import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
const useStyles = makeStyles({
	root: {
		width: '100%',
		backgroundColor: '#1e202f'
	},
	link: {
		color: '#85858b',

		'&.Mui-selected': {
			color: '#fff'
		}
	}
});

const Navigation = () => {
	const classes = useStyles();
	const [ value, setValue ] = React.useState('recents');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation value={value} onChange={handleChange} className={classes.root}>
			<BottomNavigationAction value="recents" className={classes.link} icon={<PersonIcon />} />
			<BottomNavigationAction value="favorites" className={classes.link} icon={<WidgetsOutlinedIcon />} />
			<BottomNavigationAction value="nearby" className={classes.link} icon={<TurnedInNotOutlinedIcon />} />
			<BottomNavigationAction value="folder" className={classes.link} icon={<NotificationsNoneOutlinedIcon />} />
		</BottomNavigation>
	);
};

export default Navigation;
