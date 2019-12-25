import express from 'express';

const pace = express.Router();

pace.post('/', async (req, res) => {
	try {
		const timeHours = req.body.input.time.hours;
		const timeMinutes = req.body.input.time.minutes;
		const timeSeconds = req.body.input.time.seconds;
		const resultUnit = req.body.input.resultUnit;
		let distanceLength = req.body.input.distance.length;
		const distanceUnit = req.body.input.distance.unit;

		if (distanceUnit === 'kilometers' && resultUnit === 'miles') {
			distanceLength = distanceLength * 0.621371;
		} else if (distanceUnit === 'miles' && resultUnit === 'kilometers') {
			distanceLength = distanceLength * 1.609344;
		}

		const totalTimeSeconds = timeHours * 3600 + timeMinutes * 60 + timeSeconds;
		const secondsPerUnit = totalTimeSeconds / distanceLength;

		const hours = Math.floor(secondsPerUnit / 3600);
		const minutes = Math.floor((secondsPerUnit % 3600) / 60);
		const seconds = secondsPerUnit % 60;

		res.json({
			pace: {
				hours: hours,
				minutes: minutes,
				seconds: seconds,
			},
		});
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

export default pace;
