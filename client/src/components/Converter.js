import React from 'react';

//Material UI imports
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const Converter = () => {
	return (
		<Container>
			<ExpansionPanel>
				<ExpansionPanelSummary>Time</ExpansionPanelSummary>
				<ExpansionPanelDetails>Enter time</ExpansionPanelDetails>
			</ExpansionPanel>
		</Container>
	);
};

export default Converter;
