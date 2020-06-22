import express from 'express'
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(process.env.PORT || 5000, () =>  {
  console.log('Starting!');
});