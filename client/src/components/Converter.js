import React from 'react';

//Material UI imports
import TimePanel from '../components/TimePanel';

import useStyles from '../styles/containerStyle';
import DistancePanel from './DistancePanel';
import PacePanel from './PacePanel';

const Converter = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<TimePanel />
			<DistancePanel />
			<PacePanel />
		</div>
	);
};

export default Converter;
