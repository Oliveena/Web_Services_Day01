module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
      itemCode: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
      },
      itemDesc: {
          type: DataTypes.STRING(200),
          allowNull: false,
      },
      sellerEmail: {
          type: DataTypes.STRING(320),
          allowNull: false,
      },
      lastBid: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: true,
      },
      lastBidderEmail: {
          type: DataTypes.STRING(250),
          allowNull: true,
      },
  }, {
      timestamps: false, //I don't need timestamps, but they come included with Sequelize
  });

  return Auction;
};
