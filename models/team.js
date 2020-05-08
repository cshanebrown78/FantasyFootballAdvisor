module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    teamName: DataTypes.STRING,
    player: DataTypes.STRING,
    position: DataTypes.STRING,
    byeWeek: DataTypes.INTEGER,
    projectedSeasonPoints: DataTypes.DECIMAL(10,2),
    previousYearPoints: DataTypes.DECIMAL(10,2)
  });
  return Team;
};
