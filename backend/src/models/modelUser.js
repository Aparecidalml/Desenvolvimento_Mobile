import sequelize from '../config/database.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING(100),
        allowNull: false        
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false
    },    
    },
    {
        tableName: 'usuarios',
        charset: 'utf-8',
        timestamps: false
    }    
)

export default User