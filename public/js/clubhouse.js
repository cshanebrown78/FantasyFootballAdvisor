$(document).ready(function(){

    var userContainer = $(".user-container");
    getUserTeam();

    function createNewUserTeamRow(positionData) {
        var newTR = $("<tr>");
        newTR.append("<td>" + positionData.player_name + "</td>");
        newTR.append("<td>" + positionData.draft_rank + "</td>");
        newTR.append("<td>" + positionData.team_name + "</td>");
        newTR.append("<td>" + positionData.position + "</td>");
        newTR.append("<td>" + positionData.bye + "</td>");
        newTR.append("</tr>")
        return newTR;
        
    }

    function getUserTeam () {
        $.get("/api/players/", function(data) {
            var userDrafted = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].user_team === true) {
                    userDrafted.push(data[j])
                }
            }
                var rowsToAdd = [];
                    for (var i = 0; i < userDrafted.length; i++) {
                        rowsToAdd.push(createNewUserTeamRow(userDrafted[i]))
                    }
                userContainer.append(rowsToAdd)
                
               
            
        });
    };


})