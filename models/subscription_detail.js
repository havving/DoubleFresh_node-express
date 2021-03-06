const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const subscription_detail =  sequelize.define('subscription_detail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sub_week_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pickup_total_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pickup_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pickup_remain_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    request: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickup_fixed_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pickup_fixed_time: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscription_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });

  subscription_detail.associate = function (models) {
    models.Subscription_Detail.hasMany(models.Pickup_Info, {
      foreignKey: 'id',
      onDelete: 'cascade',
    });
  };

  return subscription_detail;
};
