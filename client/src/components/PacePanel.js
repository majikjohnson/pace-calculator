import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		width: 200,
    },
    formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
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

const PacePanel = () => {
    const classes = useStyles();
    
    const [unit, setUnit] = React.useState('');

	const handleChange = event => {
		setUnit(event.target.value);
	};

	return (
		<ExpansionPanel expanded={true}>
			<ExpansionPanelSummary>
				<Typography variant="h6">Pace</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<TextField
					id="pace"
					label="Enter pace"
					variant="filled"
					margin="normal"
					type="time"
					defaultValue="00:00:00"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
					inputProps={{
						step: 1,
					}}
				/>
				<FormControl className={classes.formControl}>
					<TextField
						id="unit"
						select
						label="unit"
						variant="filled"
						margin="dense"
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
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default PacePanel;
