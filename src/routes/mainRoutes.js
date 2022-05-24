const express = require('express'); //
const router = express.Router();
const MainController=require("../controllers/mainController");
let validations = require('../middlewares/validarForm');// lo requerimos



router.get('/login', MainController.home);

router.post('/login',validations,MainController.save);



module.exports = router;