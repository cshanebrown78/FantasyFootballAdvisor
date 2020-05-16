module.exports = function(sequelize, DataTypes) {
    var Players = sequelize.define("Players", {
      draft_rank: DataTypes.INTEGER,
      player_name: DataTypes.STRING,
      position: DataTypes.STRING,
      team_abbreviate: DataTypes.STRING,
      team_name: DataTypes.STRING,
      projected_points: DataTypes.DECIMAL(4,1),
      bye: DataTypes.INTEGER,
      user_team: DataTypes.BOOLEAN,
      other_team: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()')
      }
    });
  
    return Players;
  };