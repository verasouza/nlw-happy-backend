import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handles';




const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
//para visualizar as imagens quando clicar no path
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler);


app.listen(3333);