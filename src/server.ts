import express from 'express';
import { studentsRoutes } from './routes/students.routes';

const app = express();

app.use(express.json());

app.use("/students",studentsRoutes);

app.listen('3000');