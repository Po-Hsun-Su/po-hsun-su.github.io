const express = require('express');
const app = express();
app.use(express.static('./public'));
app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.listen(8080, (err)=> console.log("https server listening on 8080"));
