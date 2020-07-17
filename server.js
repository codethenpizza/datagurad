import express from 'express'

const app = express();

app.get('/plugins', (req, res) => {
  res.send(MOCK_PLUGINS);
});


app.get('/blockedState', (req, res) => {
  res.send(false);
});

app.post('/changePluginState', (req, res) => {
  res.send()
});

app.post('/blockedState', (req, res) => {
  res.send()
});

export default app;


const MOCK_PLUGINS = [
  {
    id: 1,
    title: 'Plugin 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim turpis nec risus tristique, sed sollicitudin ex accumsan. Suspendisse massa magna, feugiat sed scelerisque non, ullamcorper a quam.',
    isAllowed: true
  },
  {
    id: 2,
    title: 'Plugin 2',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim turpis nec risus tristique, sed sollicitudin ex accumsan. Suspendisse massa magna, feugiat sed scelerisque non, ullamcorper a quam.',
    isAllowed: true
  },
  {
    id: 3,
    title: 'Plugin 3',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dignissim turpis nec risus tristique, sed sollicitudin ex accumsan. Suspendisse massa magna,',
    isAllowed: true
  },
  {
    id: 4,
    title: 'Plugin 4',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa magna, feugiat sed scelerisque non, ullamcorper a quam.',
    isAllowed: true
  }
];


