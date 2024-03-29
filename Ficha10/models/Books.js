module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Book', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publication_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avaliable_copies: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}