import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());



import UserRouter from '../routes/user.routes.js';
app.use('/api/v1/users', UserRouter )

export { app };