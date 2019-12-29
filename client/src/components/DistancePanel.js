import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const DistancePanel = () => {
    const classes = useStyles();
	return (
		<ExpansionPanel expanded={true}>
			<ExpansionPanelSummary>
				<Typography variant="h6">Distance</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<TextField
					id="distance"
					label="Enter race distance"
					type="number"
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<FormControl className={classes.formControl}>
					<NativeSelect name="age">
						<option value="miles">miles</option>
						<option value="km">kilometers</option>
					</NativeSelect>
				</FormControl>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default DistancePanel;
