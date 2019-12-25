import express from 'express';

const time = express.Router();

time.post('/', async (req, res) => {
	try {
		const paceHours = req.body.input.pace.hours;
		const paceMinutes = req.body.input.pace.minutes;
		const paceSeconds = req.body.input.pace.seconds;
		const paceUnit = req.body.input.pace.unit;
		let distanceLength = req.body.input.distance.length;
		const distanceUnit = req.body.input.distance.unit;

		if (distanceUnit === 'kilometers' && paceUnit === 'miles') {
			distanceLength = distanceLength * 0.621371;
		} else if (distanceUnit === 'miles' && paceUnit === 'kilometers') {
			distanceLength = distanceLength * 1.609344;
		}

		const totalSecondsPace = paceHours * 3600 + paceMinutes * 60 + paceSeconds;
		const totalSecondsTime = distanceLength * totalSecondsPace;

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
	} catch (error) {
		res.status(500).json({
			msg: error,
		});
	}
});

export default time;
