import React from 'react';

//Material UI imports
import TimePanel from '../components/TimePanel';

import useStyles from '../styles/containerStyle';
import DistancePanel from './DistancePanel';

const Converter = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<TimePanel />
			<DistancePanel />
		</div>
	);
};

export default Converter;
