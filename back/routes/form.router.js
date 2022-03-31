const express = require('express');

const {createRegister} = require('../controllers/form.controller')

//middlewares
const {
	createFormValidations,
	validateResult,
} = require('../middlewares/validator.middleware');


const router = express.Router()

router.post('/',createFormValidations,validateResult,createRegister);

//export
module.exports = {formRouter:router}