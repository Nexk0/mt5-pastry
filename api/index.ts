import express from 'express';
import bodyParser from 'body-parser';
import { connectToDatabase } from './utils';
import cors from 'cors';
import dotenv from 'dotenv';
import { customerRoutes, dicesRoutes, pastriesRoutes } from './routes';

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const port = process.env.API_PORT;


app.get('/', (req, res) => {
  res.send("Hello World, (no cookies obligations here)");
});

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);
  await connectToDatabase();
});

app.use('/v1/customers', customerRoutes);
app.use('/v1/dices', dicesRoutes);
app.use('/v1/pastries', pastriesRoutes);