import express from 'express';

const distance = express.Router();

distance.post('/', async (req, res) => {
	try {
		const timeHours = req.body.input.time.hours;
		const timeMinutes = req.body.input.time.minutes;
		const timeSeconds = req.body.input.time.seconds;

		const resultUnit = req.body.input.resultUnit;

		const paceHours = req.body.input.pace.hours;
		const paceMinutes = req.body.input.pace.minutes;
		const paceSeconds = req.body.input.pace.seconds;
		const paceUnit = req.body.input.pace.unit;

		let factor = 1;

		if (resultUnit === 'kilometers' && paceUnit === 'miles') {
			factor = 0.621371;
		} else if (resultUnit === 'miles' && paceUnit === 'kilometers') {
			factor = 1.609344;
		}

		const totalSecondsPace = (paceHours * 3600 + paceMinutes * 60 + paceSeconds) * factor;
		const totalSecondsTime = timeHours * 3600 + timeMinutes * 60 + timeSeconds;

		const distance = totalSecondsTime / totalSecondsPace;

		res.json({
			distance: {
				length: distance,
			},
		});
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

export default distance;
