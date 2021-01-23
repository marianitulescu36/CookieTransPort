module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        'username': DataTypes.STRING,
        'password': DataTypes.STRING,
        'date': {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
}