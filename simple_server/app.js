var express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true }).then(
  () => {console.log('Server Online') },
  err => { console.log('Damn, that must be something wrong...'+ err)});

const userRoute = require('./routes/user.route');
var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRoute);
app.use('/industry', industryRoute);
app.get('/', function(req, res){
   res.send("Salve, Rapaziada!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000!');
});