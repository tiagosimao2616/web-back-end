module.exports = (Sequelize, DataTypes) =>{
    return Sequelize.define('User',{
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        }
    });
}