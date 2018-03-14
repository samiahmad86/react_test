/* eslint-disable no-console */

import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';
import bodyParser from 'body-parser';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, '../static')));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'YO From Express' });
});

let items = [
  {
    id: 0,
    text: 'Hello',
  },
  {
    id: 1,
    text: 'This is Schmiede',
  },
  {
    id: 2,
    text: 'We are in Düsseldorf',
  },
  {
    id: 3,
    text: 'Thats in Germany!',
  },
];

let idCounter = 4;

app.get('/api/items', (req, res) => {
  res.send({ items });
});

app.get('/api/items/:id', (req, res) => {
  const id = req.params.id;
  res.send({ item: items.filter(item => item.id == id)[0] });
});

app.post('/api/item', (req, res) => {
  const message = req.body.message;
  items.push({ id: idCounter++, text: message });
  res.send({ items });
});

app.delete('/api/items/:id', (req, res) => {
  const id = req.params.id;
  res.send({ items: items.filter(item => item.id != id) });
});


if (isDeveloping) {
  console.log('Server started in development mode.');
  const compiler = webpack(config);
  const devMiddleware = webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    contentBase: 'app',
    // publicPath: 'static',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  const hotMiddleware = webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  });

  app.use(devMiddleware);
  app.use(hotMiddleware);
  app.get('*', (req, res) => {
    res.write(devMiddleware.fileSystem.readFileSync(path.resolve(__dirname, '../dist/index.html')));
    res.end();
  });
} else {
  console.log('Server started in production mode.');
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server running on http://0.0.0.0:%s/.', port);
});
