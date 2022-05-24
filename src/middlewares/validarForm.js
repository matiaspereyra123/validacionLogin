const path = require('path');
const { body } = require('express-validator');

const validar = [
    //body("nombre").notEmpty().withMessage("Debes completar el campo de nombre"),
   // body("color").exists().withMessage("Debes seleccionar un color"),
  //  body("email")
  //  .notEmpty().withMessage("Debes completar el campo de email").bail()
  //  .isEmail().withMessage("Debes incluir un email válido"),
  //  body("edad")
  //  .notEmpty().withMessage("Debes compeltar el campo de edad").bail()
 //   .isNumeric().withMessage("Debes ingresar un número válido"),
 body('nombre').notEmpty().withMessage("Debes completar el campo de nombre"), 
 body('color').notEmpty().withMessage("Debes completar el campo de color"), 
 body('email').notEmpty().withMessage("Debes completar el campo de email"), 
 body('edad').notEmpty().withMessage("Debes completar el campo de edad")
]

module.exports = validar;