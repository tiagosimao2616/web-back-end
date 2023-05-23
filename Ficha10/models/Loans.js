module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Loan', {
        loan_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        loan_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        return_date: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
}