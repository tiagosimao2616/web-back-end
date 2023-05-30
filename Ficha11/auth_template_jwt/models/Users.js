module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}