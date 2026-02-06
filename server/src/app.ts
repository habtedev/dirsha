import express from 'express';
import authRouter from './router/authRouter';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());

// Auth routes
app.use('/api/auth', authRouter);

export default app;
