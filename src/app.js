import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/paceCalculator', (req, res) => {
	switch (req.body.calculation) {
		case 'time':
			const hoursPace = req.body.input.pace.hours;
			const minutesPace = req.body.input.pace.minutes;
			const secondsPace = req.body.input.pace.seconds;
			const paceUnit = req.body.input.pace.unit;
			const distance = req.body.input.distance.length;
			
			const totalSecondsPace = (hoursPace * 3600) + (minutesPace * 60) + secondsPace;
			const totalSecondsTime = paceUnit === 'miles' ? distance * totalSecondsPace : distance * totalSecondsPace * 1.609344;

			const hours = Math.floor(totalSecondsTime / 3600);
			const mins = Math.floor((totalSecondsTime % 3600) / 60);
			const secs = totalSecondsTime % 60;

			res.json({
				time: {
					hours: hours,
					minutes: mins,
					seconds: secs
				},
			});
			break;
	}

	res.status(500).json({
		msg: "Couldn't understand the request",
	});
});

export default app;
