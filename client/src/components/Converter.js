import React from 'react';

//Material UI imports
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import TextField from '@material-ui/core/TextField';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		marginTop: '16px',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		width: 200,
	},
	expanded: {},
});

const Converter = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary className={classes.expanded}>
					<Typography variant="h6">Time</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<form className={classes.container} noValidate>
						<TextField
							id="time"
							label="Enter the target time"
							type="time"
							defaultValue="00:00:00"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							inputProps={{
								step: 1, // 5 min
							}}
						/>
					</form>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<ExpansionPanel>
				<ExpansionPanelSummary>
					<Typography variant="h6">Distance</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					Enter Distance
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

export default Converter;
