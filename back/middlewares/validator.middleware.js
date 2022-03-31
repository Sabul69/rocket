const { body, validationResult } = require('express-validator');

// Utils
const { AppError } = require('../utils/appError');

// Validations
exports.createFormValidations = [
	body('nombre').isString().notEmpty().withMessage('Enter a valid name'),
	body('apellido_paterno').isString().notEmpty().withMessage('Enter a valid lastname'),
	body('apellido_materno').isString().withMessage('Enter a valid lastname'),
    body('fecha_nacimiento').notEmpty().withMessage('Enter a valid day of birth'),
    body('correo').isEmail().notEmpty().withMessage('Enter a valid email'),
	body('telefono').isLength({ min: 8, max: 12 }).withMessage('Check your phone number'),
];

exports.validateResult = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		const message = errors
			.array() // [ { msg, ... }, { msg, ... }, { msg, ... } ]
			.map(({ msg }) => msg) // [msg, msg, msg]
			.join('. '); // 'msg. msg. msg'

		return next(new AppError(message, 400));
	}

	next();
};
