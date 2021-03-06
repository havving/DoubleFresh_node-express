const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname + '', 'config', 'config.json'))[env];

const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 모델 연동
db.User_Info = require('./user_info') (sequelize, Sequelize);
db.Pickup_Info = require('./pickup_info') (sequelize, Sequelize);
db.Subscription = require('./subscription') (sequelize, Sequelize);
db.Subscription_Detail = require('./subscription_detail') (sequelize, Sequelize);

db.Subscription_Detail.hasMany(db.Pickup_Info);
db.Pickup_Info.belongsTo(db.Subscription_Detail, {
    foreignKey: "subscriptionDetailId",
});

db.User_Info.hasOne(db.Subscription);
db.Subscription.belongsTo(db.User_Info);

module.exports = db;