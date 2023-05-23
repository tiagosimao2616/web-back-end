module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Book', {
        book_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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