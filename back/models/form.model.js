const {db} = require('../utils/database')
const {DataTypes} = require('sequelize')

const form = db.define('users_test_saulhernandez',{
    id:{
        primaryKey: true,
		autoIncrement: true,
		type: DataTypes.INTEGER,
		allowNull: false,    
    },
    nombre:{
        type: DataTypes.STRING(20),
		allowNull: false,
    },
    segundo_nombre:{
        type: DataTypes.STRING(20),
		allowNull: true,
    },
    apellido_paterno:{
        type: DataTypes.STRING(20),
		allowNull: false,
    },
    apellido_materno:{
        type: DataTypes.STRING(20),
		allowNull: false,
    },
    fecha_nacimiento:{
        type: DataTypes.STRING(10),
		allowNull: false,
    },
    correo:{
        type: DataTypes.STRING(100),
		allowNull: false,
		unique: true,
    }
    ,
    telefono:{
        type: DataTypes.INTEGER,
			allowNull: false,
    }


});


module.exports = { Todo };
