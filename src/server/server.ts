import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 7000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/login', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

app.listen(port, () => console.log(`This app is listening on port ${port}`));
