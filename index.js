const iptvController = require('./src/controllers/IpttvController');
const app = require('./src/config/server-config');

app.get('/info/:vodId', iptvController.getVODInfo);
app.get('/categorias',iptvController.getVODStreamCategories);

app.get('/', iptvController.getVODStreams)
app.get('/Usuario', iptvController.getAccountInfo)
app.get('/:categoryId', iptvController.getVODStreams)
app.get('/test/:id', iptvController.getAllEPGLiveStreams)

