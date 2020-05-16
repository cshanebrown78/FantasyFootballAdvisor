module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    draftRank: DataTypes.INTEGER,
    playerName: DataTypes.STRING,
    position: DataTypes.STRING,
    teamAbbreviate: DataTypes.STRING,
    teamName: DataTypes.STRING,
    projectedPoints: DataTypes.DECIMAL(4, 1),
    bye: DataTypes.INTEGER,
    userTeam: DataTypes.BOOLEAN,
    otherTeam: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("NOW()")
    }
  });

  return Players;
};
