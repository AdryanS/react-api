const iptvController = require('./src/controllers/IpttvController');
const app = require('./src/config/server-config');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require("body-parser");

app.get('/filmes/info/:vodId', iptvController.getVODInfo);
app.get('/filmes/categorias',iptvController.getVODStreamCategories);

app.get('/filmes/filmes', iptvController.getVODStreams);
app.get('/api/filmes/:categoryId', iptvController.getVODStreams)
app.get('/test/:id', iptvController.getAllEPGLiveStreams)

/*app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
    })
);*/