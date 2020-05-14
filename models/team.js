module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    teamName: DataTypes.STRING,
    player: DataTypes.STRING,
    position: DataTypes.STRING,
    nfl_team: DataTypes.STRING,
    byeWeek: DataTypes.INTEGER,
    projectedPoints: DataTypes.DECIMAL(10,2),
    drafted: DataTypes.BOOLEAN
  });
  return Team;
};
