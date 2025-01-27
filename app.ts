import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db';
import userRoutes from './routes/userRoutes';
import patientRoutes from './routes/patientRoutes';

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/patients', patientRoutes);

export default app;
