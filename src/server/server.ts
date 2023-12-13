import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { router } from './routes/login';
import { Path } from '../path/paths';

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', router);

app.get(Path.Home, (req, res) => { 
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`This app is listening on port ${port}`));
