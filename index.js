const iptvController = require('./src/controllers/IpttvController');
const app = require('./src/config/server-config');
const { createProxyMiddleware } = require('http-proxy-middleware');
const bodyParser = require("body-parser");

app.get('/info/:vodId', iptvController.getVODInfo);
app.get('/categorias',iptvController.getVODStreamCategories);


app.get('/:categoryId', iptvController.getVODStreams)
app.get('/test/:id', iptvController.getAllEPGLiveStreams)

/*app.use(
    '/',
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
    })
);*/