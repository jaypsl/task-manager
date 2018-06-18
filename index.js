var express = require('express');

//system module
var path = require('path');

var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

var port = 3000;

//view engine
//let the system know what folder we wanna use for our view
//it tells teh system that the view is gonna be in the view folder

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//able to render teh file within the html extension

app.engine('html', require('ejs').renderFile);

// we need static folder where we put all angular folders

app.use(express.static(path.join(__dirname, 'client')));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/', index);
app.use('/api', tasks);

//listen
app.listen(port, function () {
  console.log(`server is started on port ${port}`);
})
