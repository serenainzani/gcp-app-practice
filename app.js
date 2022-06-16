const express = require('express')
const app = express()
const port = parseInt(process.env.PORT) || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/boo', (req, res) => {
  res.send('Boo!')
})

app.use(function(req, res, next) {
  return res.status(404).send('Route '+req.url+' Not found.');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})