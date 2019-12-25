import 'dotenv/config';
import express from 'express';
import time from './routes/time';
import pace from './routes/pace';

const app = express();

app.use(express.json());

app.use('/api/time/', time);
app.use('/api/pace/', pace);

export default app;
