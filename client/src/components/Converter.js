import React from 'react';

//Material UI imports
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		marginTop: '16px',
	},
});

const Converter = () => {
    const classes = useStyles();
	return (
		<div className={classes.root}>
			<ExpansionPanel>
				<ExpansionPanelSummary>
                    <Typography variant="h6">
                        Time
                    </Typography>
                </ExpansionPanelSummary>
				<ExpansionPanelDetails>Enter time</ExpansionPanelDetails>
			</ExpansionPanel>
            <ExpansionPanel>
				<ExpansionPanelSummary>
                    <Typography variant="h6">
                        Distance
                    </Typography>
                </ExpansionPanelSummary>
				<ExpansionPanelDetails>Enter distance</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
};

export default Converter;
