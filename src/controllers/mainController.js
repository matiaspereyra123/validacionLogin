//const fs  = require('fs'); 
//const bcryptjs = require('bcryptjs');
//const path= require('path');


const {validationResult} = require('express-validator')


const MainController= {
    home: function(req,res){
        res.render('users/login');
    }, 
    save: function(req,res){
        let errors=validationResult(req); //resultado valicacion de ese request
        res.send(errors);
     
    }
    
}

module.exports = MainController