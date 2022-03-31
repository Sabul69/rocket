//Models
const {Form} = require('../models/form.model')

//Utils
const {catchAsync} = require('../utils/catchAsync')

exports.createRegister = catchAsync(async (req, res, next) => {
	const { nombre, segundo_nombre,apellido_paterno,apellido_materno,fecha_nacimiento,correo,telefono } = req.body;

	const newRegister = await Form.create({ 
        nombre, 
        segundo_nombre,
        apellido_paterno,
        apellido_materno,
        fecha_nacimiento,
        correo,
        telefono
     });

	res.status(201).json({
		status: 'success',
		data: { newRegister },
	});
});