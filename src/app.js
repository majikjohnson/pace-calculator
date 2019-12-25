import 'dotenv/config';
import express from 'express';
import time from './routes/time';
import pace from './routes/pace';
import distance from './routes/distance';

const app = express();

app.use(express.json());

app.use('/api/time/', time);
app.use('/api/pace/', pace);
app.use('/api/distance/', distance);

export default app;
