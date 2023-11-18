import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/login';

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', router);

app.listen(port, () => console.log(`This app is listening on port ${port}`));
