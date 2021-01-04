const axios = require('axios');
const iptvController = require('./src/controllers/IpttvController')
const http = require('http')





fetch('http://127.0.0.1:3080/series')
.then(response => response.json()).then(json => json.filter(a => a.gender != '')).then(a => console.log(a))


