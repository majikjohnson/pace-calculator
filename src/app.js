import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/paceCalculator', (req, res) => {
	const paceHours = req.body.input.pace.hours;
	const paceMinutes = req.body.input.pace.minutes;
	const paceSeconds = req.body.input.pace.seconds;
	const paceUnit = req.body.input.pace.unit;
	let distanceLength = req.body.input.distance.length;
	const distanceUnit = req.body.input.distance.unit;

	if(distanceUnit === 'kilometers' && paceUnit === 'miles') {
		distanceLength = distanceLength * 0.621371;
	}
	else if(distanceUnit === 'miles' && paceUnit === 'kilometers') {
		distanceLength = distanceLength * 1.609344;
	}
	

	switch (req.body.calculation) {
		case 'time':
			const totalSecondsPace = paceHours * 3600 + paceMinutes * 60 + paceSeconds;
			const totalSecondsTime = (distanceLength * totalSecondsPace);

			const hours = Math.floor(totalSecondsTime / 3600);
			const mins = Math.floor((totalSecondsTime % 3600) / 60);
			const secs = totalSecondsTime % 60;

			res.json({
				time: {
					hours: hours,
					minutes: mins,
					seconds: secs,
				},
			});
			break;
	}

	res.status(500).json({
		msg: "Couldn't understand the request",
	});
});

export default app;
