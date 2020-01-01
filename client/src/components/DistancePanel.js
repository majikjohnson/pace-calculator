import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, InputLabel, Select } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';

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
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		paddingBottom: theme.spacing(2),
	}
}));

const units = [
	{
		value: 'miles',
		label: 'miles',
	},
	{
		value: 'kilometers',
		label: 'km',
	},
];

const DistancePanel = () => {
	const classes = useStyles();

	const [unit, setUnit] = React.useState('');

	const handleChange = event => {
		setUnit(event.target.value);
	};

	return (
		<div className={classes.root}>
			<Grid container className={classes.header}>
				<Grid item>
					<Typography variant="h6">Distance</Typography>
				</Grid>
			</Grid>
			<Grid container className={classes.body}>
				<Grid item xs={7} className={classes.distanceControl}>
					<FormControl>
						<TextField
							id="distance"
							label="Enter distance"
							variant="filled"
							type="number"
						/>
					</FormControl>
				</Grid>
				<Grid item xs={5} className={classes.unitControl}>
					<FormControl fullWidth>
						<TextField
							id="unit"
							select
							label="unit"
							variant="filled"
							InputLabelProps={{
								strink: 'false',
							}}
							SelectProps={{
								native: true,
							}}
							value={unit}
							onChange={handleChange}
						>
							{units.map(option => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</TextField>
					</FormControl>
				</Grid>
				<Grid item xs={12} className={classes.raceControl}>
					<FormControl fullWidth>
						<TextField
							id="unit"
							select
							label="unit"
							variant="filled"
							InputLabelProps={{
								strink: 'false',
							}}
							SelectProps={{
								native: true,
							}}
							value={unit}
							onChange={handleChange}
						>
							{units.map(option => (
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
