let getDogData = require('./data.js');
let server = require('./server.js');

//get data
getDogData().then(res => server(res));

