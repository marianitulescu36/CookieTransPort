let sequelize = require('./db.js');

const Users = sequelize.import('./users.js');
const transportType = sequelize.import('./transportType.js');

const Reviews = sequelize.import('./reviews.js');

Users.hasMany(Reviews, { onDelete: 'cascade' });

Reviews.belongsTo(Users, { onDelete: 'cascade' });

Reviews.belongsTo(transportType, { onDelete: 'cascade' });

module.exports = {
    sequelize,
    Users,
    Reviews,
    transportType
}
