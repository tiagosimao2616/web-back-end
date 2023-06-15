module.exports = (sequelize, DataTypes) => {
    return sequelize.define('course', {
        course_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instructor: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}