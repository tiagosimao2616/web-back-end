module.exports = (sequelize, DataTypes) => {
    return sequelize.define('grade', {
        grade: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
}