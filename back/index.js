const express = require('express');
const glob = require('glob');
const path = require('path');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

// const routes = require('./routes/rutas.js');

app.get('/', (req, res) => {
    res.send("TrendiApp");
})

// error handling
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
  });

//listen for request on port 3000, and as a callback function have the port listened on logged
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

glob.sync('./routes/*.js').forEach((file)=>{
    require(path.resolve(file))(app);
});

module.exports = app;