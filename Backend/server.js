import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(json());
app.get('/',(req,res) => {
  res.send('API is working');
});

// Connect to MongoDB
connect('mongodb://127.0.0.1:27017/auth_demo');

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});