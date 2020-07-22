import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';


// biblioteca tem que vir com tipos tambem

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());




app.listen(3333);