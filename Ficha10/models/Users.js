module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
       phone_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
}