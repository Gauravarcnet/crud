//importing modules
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();

const route=require('./routes/routes');

//connect tp mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected',function(){
  console.log("connected to mongodb @27017 successfully");
});
mongoose.connection.on('error',function(err){
  if(err){
    console.log('error is'+err);
  }

});
//port number
const port=3000;

app.use('/api',route);

//adding middleware --cors
app.use(cors());

//body parser
app.use(bodyparser.json());

// app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
//   extended: true
// }));

//static fiels
app.use(express.static(path.join(__dirname,'public')))

//testing server
app.get('/',function(req,res){
    res.send('foobar');
});
app.listen(port,function(){
    console.log('server started at port'+port);

});
