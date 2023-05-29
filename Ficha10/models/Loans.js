module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Loan', {
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