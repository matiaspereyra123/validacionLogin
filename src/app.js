const createError = require('http-errors');
const express = require('express'); 

const path = require('path');

const app = express();
app.use(express.static('./public'));
const mainRoutes=require("./routes/mainRoutes");
const session = require('express-session');
const cookies = require('cookie-parser');

app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./views'));
app.listen(3030,() =>{
    console.log("Servidor corriendo en http://localhost:3030");
});


app.use(session({
secret: 'Nombre del sitio',
resave: false,
saveUninitialized: true,
}));


app.use(cookies());

app.use('/',mainRoutes);
app.use('/users', mainRoutes);

