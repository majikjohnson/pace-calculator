import 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.post('/paceCalculator', (req, res) => {
	res.send(req.body);
});

export default app;