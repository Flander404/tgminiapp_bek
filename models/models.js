const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const UserData = sequelize.define('user_data', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
})

User.hasMany(UserData)
UserData.belongsTo(User)

module.exports = {
    User,
    UserData
}