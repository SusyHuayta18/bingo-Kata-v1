const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3005);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
//middlewares

//routes
app.use(require('./routes/'));


//listeneing the server
app.listen(app.get('port'), () =>{
 console.log(`App corriendo puerto ${app.get('port')}`);    
});