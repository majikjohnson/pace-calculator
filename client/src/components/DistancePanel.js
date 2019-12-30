import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
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
		<ExpansionPanel expanded={true}>
			<ExpansionPanelSummary>
				<Typography variant="h6">Distance</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<TextField
					id="distance"
					label="Enter distance"
					variant="filled"
					margin="normal"
					size="small"
					type="number"
				/>
				<FormControl className={classes.formControl}>
					<TextField
						id="unit"
						select
						label='unit'
						variant="filled"
						margin="dense"
						InputLabelProps={{
							strink: 'false'
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
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default DistancePanel;
