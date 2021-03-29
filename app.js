//require libraries

const express = require('express');

//app setup 
const app = express();

//middleware 
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//routes 
app.get('/', (req, res) => {
    console.log(req.query)

    res.render('home')
});


  app.get('/greetings/:name', (req, res) => {
    // grab the name from the path provided
    const name = req.params.name;
    // render the greetings view, passing along the name
    res.render('greetings', { name });
  });

//start server 

app.listen(3000,() => {
    console.log('Gif search listening at port 3000')
})