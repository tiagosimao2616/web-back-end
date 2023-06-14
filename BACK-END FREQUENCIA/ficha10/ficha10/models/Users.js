module.exports = (Sequelize, DataTypes) =>{
    return Sequelize.define('User',{
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        address:{
            type: DataTypes.STRING
        },
        phone_number:{
            type: DataTypes.STRING
        }
    });
}