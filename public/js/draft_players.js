$(document).ready(function() {
  var qbContainer = $(".qb-container");
  var rbContainer = $(".rb-container");
  var wrContainer = $(".wr-container");
  var teContainer = $(".te-container");
  var userContainer = $(".user-container");
  var otherContainer = $(".other-container");

  getQBs();
  getRBs();
  getWRs();
  getTEs();
  getUserTeam();
  getOtherTeams();

  function createNewRow(positionData) {
    var newTR = $("<tr>");
    newTR.append("<td>" + positionData.player_name + "</td>");
    newTR.append("<td>" + positionData.draft_rank + "</td>");
    newTR.append("<td>" + positionData.team_name + "</td>");
    newTR.append(
      "<td><button class='user-team' player-id='" +
        positionData.id +
        "'>Draft</button></td>"
    );
    newTR.append(
      "<td><button class='other-team'player-id='" +
        positionData.id +
        "'>Drafted</button></td>"
    );
    newTR.append("</tr>");
    return newTR;
  }

  function getQBs() {
    $.get("/api/players/position/QB", function(data) {
      var undrafted = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].user_team === false && data[j].other_team === false) {
          undrafted.push(data[j]);
        }
      }
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(undrafted[i]));
      }
      qbContainer.append(rowsToAdd);
    });
  }

  function getRBs() {
    $.get("/api/players/position/RB", function(data) {
      var undrafted = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].user_team === false && data[j].other_team === false) {
          undrafted.push(data[j]);
        }
      }
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(undrafted[i]));
      }
      rbContainer.append(rowsToAdd);
    });
  }

  function getWRs() {
    $.get("/api/players/position/WR", function(data) {
      var undrafted = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].user_team === false && data[j].other_team === false) {
          undrafted.push(data[j]);
        }
      }
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(undrafted[i]));
      }
      wrContainer.append(rowsToAdd);
    });
  }

  function getTEs() {
    $.get("/api/players/position/TE", function(data) {
      var undrafted = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].user_team === false && data[j].other_team === false) {
          undrafted.push(data[j]);
        }
      }
      var rowsToAdd = [];
      for (var i = 0; i < 5; i++) {
        rowsToAdd.push(createNewRow(undrafted[i]));
      }
      teContainer.append(rowsToAdd);
    });
  }

  $(document).on("click", "button.user-team", function(event) {
    event.preventDefault();
    var userTeamId = $(this).attr("player-id");
    var isUserDrafted = {
      userTeam: 1
    };
    $.ajax("api/players/" + userTeamId, {
      type: "PUT",
      data: isUserDrafted
    }).then(function() {
      location.reload();
    });
  });

  $(document).on("click", "button.other-team", function(event) {
    event.preventDefault();
    var otherTeamId = $(this).attr("player-id");
    var isOtherDrafted = {
      otherTeam: 1
    };
    $.ajax("api/players/" + otherTeamId, {
      type: "PUT",
      data: isOtherDrafted
    }).then(function() {
      location.reload();
    });
  });

  function createNewUserTeamRow(positionData) {
    var newTR = $("<tr>");
    newTR.append("<td>" + positionData.player_name + "</td>");
    newTR.append("<td>" + positionData.draft_rank + "</td>");
    newTR.append("<td>" + positionData.team_name + "</td>");
    newTR.append("<td>" + positionData.position + "</td>");
    newTR.append("<td>" + positionData.bye + "</td>");
    newTR.append("</tr>");
    return newTR;
  }

  function getUserTeam() {
    $.get("/api/players/", function(data) {
      var userDrafted = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].user_team === true) {
          userDrafted.push(data[j]);
        }
      }
      var rowsToAdd = [];
      for (var i = 0; i < userDrafted.length; i++) {
        rowsToAdd.push(createNewUserTeamRow(userDrafted[i]));
      }
      userContainer.append(rowsToAdd);
    });
  }

  function getOtherTeams() {
    $.get("/api/players/", function(data) {
      var otherDrafted = [];
      for (var j = 0; j < data.length; j++) {
        if (data[j].other_team === true) {
          otherDrafted.push(data[j]);
        }
      }
      var rowsToAdd = [];
      for (var i = 0; i < otherDrafted.length; i++) {
        rowsToAdd.push(createNewUserTeamRow(otherDrafted[i]));
      }
      otherContainer.append(rowsToAdd);
    });
  }

  $(document).on("click", "button.undo-draft", function(event) {
    event.preventDefault();
    if (confirm("Are you sure you want to reset the draft?")) {
      var undoDraft = {
        userTeam: 0,
        otherTeam: 0
      };
      for (var x = 0; x < 100; x++) {
        $.ajax("api/players/" + x, {
          type: "PUT",
          data: undoDraft
        }).then(function() {
          location.reload();
        });
      }
    } else {
      location.reload();
    }
  });
});
