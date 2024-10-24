let express = require('express')
let app = express()
let port = 3000
let path = require('path')
app.use('/', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("index.ejs");
  })
  app.get('/home', (req, res) => {
    res.render("index.ejs");
  })
  app.get('/about', (req, res) => {
    res.render("about.ejs");
  })

  app.get('/cms', (req, res) => {
    res.render("crop_monitoring");
  })
  app.get('/crs', (req, res) => {
    res.render("crop_recommendation");
  })
  app.get('/cos', (req, res) => {
    res.render("crop_observation");
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })