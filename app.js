const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs')

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/projects', (req, res) => {
    res.send('PROJECTS!');
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Starting server');
})
