import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	},
}));

const TimePanel = () => {
	const classes = useStyles();

	return (
		<ExpansionPanel expanded={true}>
			<ExpansionPanelSummary>
				<Typography variant="h6">Time</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<TextField
					id="time"
					label="Enter target time"
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
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default TimePanel;
