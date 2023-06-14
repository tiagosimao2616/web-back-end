module.exports = (Sequelize, DataTypes) =>{
    return Sequelize.define('Book',{
        id:{
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title:{
            type: DataTypes.STRING
        },
        author_name:{
            type: DataTypes.STRING
        },
        publication_date:{
            type: DataTypes.STRING
        },
        genre:{
            type: DataTypes.STRING
        },
        availabel_copies:{
            type: DataTypes.INTEGER
        }

    });
}