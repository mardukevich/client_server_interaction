import express from 'express';
import bodyParser from 'body-parser';
import { router } from 'server/routes/login';
import { Path } from 'path/paths';

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', router);

app.get(Path.Home, (req, res) => { 
  res.sendFile('dist/index.html')
})

app.listen(port, () => console.log(`This app is listening on port ${port}`));
