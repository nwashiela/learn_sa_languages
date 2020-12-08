let express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')



let app = express();


app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'))



app.get('/', function (req, res) {
    res.render('home');
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});