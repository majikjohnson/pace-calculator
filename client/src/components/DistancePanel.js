import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	header: {
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		padding: theme.spacing(2),
	},
	body: {
		backgroundColor: theme.palette.primary.light,
	},
	distanceControl: {
		padding: theme.spacing(2),
	},
	unitControl: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
	raceControl: {
		padding: theme.spacing(2),
	},
}));

const units = [
	{
		value: 'miles',
		label: 'miles',
	},
	{
		value: 'km',
		label: 'km',
	},
];

const events = [
	{
		value: 0,
		label: 'pick event',
	},
	{
		value: 'marathon',
		label: 'marathon',
	},
	{
		value: 'half-marathon',
		label: 'half-marathon',
	},
];

const DistancePanel = () => {
	const classes = useStyles();

	const [distance, setDistance] = React.useState(0);
	const [unit, setUnit] = React.useState('');
	const [event, setEvent] = React.useState('');

	const changeDistance = e => {
		setDistance(e.target.value);
	}
	
	const changeUnit = e => {
		setUnit(e.target.value);
	};

	const changeEvent = e => {
		const newDistance = e.target.value;
		setEvent(newDistance);

		switch(newDistance) {
			case 'marathon':
				setDistance(26.21875);
				break;
			case 'half-marathon':
				setDistance(13.109375);
		}
	};

	return (
		<div className={classes.root}>
			<Grid container className={classes.header}>
				<Grid item>
					<Typography variant="h6">Distance</Typography>
				</Grid>
			</Grid>
			<Grid container className={classes.body}>
				<Grid item xs={8} className={classes.distanceControl}>
					<FormControl fullWidth>
						<TextField
							id="distance"
							label="Enter distance"
							variant="filled"
							type="number"
							InputProps={{
								endAdornment: (
									<InputAdornment position="start">
										{unit ? unit : 'miles'}
									</InputAdornment>
								),
							}}
							value={distance}
							onChange={changeDistance}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={4} className={classes.unitControl}>
					<FormControl fullWidth>
						<TextField
							id="unit"
							select
							label="Unit"
							variant="filled"
							InputLabelProps={{
								strink: 'false',
							}}
							SelectProps={{
								native: true,
							}}
							value={unit}
							onChange={changeUnit}
						>
							{units.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</TextField>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<Typography>--Or--</Typography>
				</Grid>
				<Grid item xs={12} className={classes.raceControl}>
					<FormControl fullWidth>
						<TextField
							id="event"
							select
							label="Event"
							variant="filled"
							InputLabelProps={{
								strink: 'false',
							}}
							SelectProps={{
								native: true,
							}}
							value={event}
							onChange={changeEvent}
						>
							{events.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</TextField>
					</FormControl>
				</Grid>
			</Grid>
		</div>
	);
};

export default DistancePanel;
