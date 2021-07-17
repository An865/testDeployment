module.exports = server = (data) => {
const express = require('express');
const app = express();
const htmlRoutes = require('../routes/htmlrouter');
const apiRoutes = require('../routes/apirouter')(data);

 // for parsing application/json
 app.use(express.json());
 // for parsing url encoded data
 app.use(express.urlencoded({ extended: true }));
 //use the following code to serve images, CSS files, and JavaScript files in a directory named public
 app.use(express.static('public'));

 app.use('/', htmlRoutes)
 app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8080

   app.listen(PORT, ()=> {
      console.log(`Listening on PORT: http://localhost:${PORT}`);
   })
}