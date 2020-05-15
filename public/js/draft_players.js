$(document).ready(function() {

    var qbContainer = $(".qb-container");
    var rbContainer = $(".rb-container");
    var wrContainer = $(".wr-container");
    var teContainer = $(".te-container");
    var qbList = $(".qbs")
    var nextRow = $(".next-qb-row")
    var qbs = [];
    // $(document).on("click", ".user-team", userDraft)

    getQBs();
    getRBs();
    getWRs();
    getTEs();


    function createNewRow(positionData) {
        var newTR = $("<tr>");
        // newTR.data("quarterback", qbData);
        // console.log(positionData.id)
        // newTR.data("player-id", positionData.id)
        newTR.append("<td>" + positionData.player_name + "</td>");
        newTR.append("<td>" + positionData.draft_rank + "</td>");
        newTR.append("<td>" + positionData.team_name + "</td>");
        newTR.append("<td><button class='user-team' player-id='" + positionData.id + "'>Draft</button></td>");
        newTR.append("<td><button class='other-team'player-id='" + positionData.id + "'>Drafted</button></td>");
        newTR.append("</tr>")
        return newTR;
        
    }

    function getQBs () {
        $.get("/api/players/position/QB", function(data) {
            // console.log(data);
            // console.log(data[0].user_team);
            var undrafted = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].user_team === false && data[j].other_team === false) {
                    undrafted.push(data[j])
                }
            }
            // console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        // console.log(rowsToAdd)
                    }
                qbContainer.append(rowsToAdd)
                
               
            
        });
    };

    function getRBs () {
        $.get("/api/players/position/RB", function(data) {
            // console.log(data);
            // console.log(data[0].user_team);
            var undrafted = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].user_team === false && data[j].other_team === false) {
                    undrafted.push(data[j])
                }
            }
            // console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        // console.log(rowsToAdd)
                    }
                rbContainer.append(rowsToAdd)
        });
    };

    function getWRs () {
        $.get("/api/players/position/WR", function(data) {
            // console.log(data);
            // console.log(data[0].user_team);
            var undrafted = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].user_team === false && data[j].other_team === false) {
                    undrafted.push(data[j])
                }
            }
            // console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        // console.log(rowsToAdd)
                    }
                wrContainer.append(rowsToAdd)
        });
    };

    function getTEs () {
        $.get("/api/players/position/TE", function(data) {
            // console.log(data);
            // console.log(data[0].user_team);
            var undrafted = [];
            for (var j = 0; j < data.length; j++) {
                if (data[j].user_team === false && data[j].other_team === false) {
                    undrafted.push(data[j])
                }
            }
            // console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        // console.log(rowsToAdd)
                    }
                teContainer.append(rowsToAdd)
        });
    };

    // function userDraft() {
    //     console.log($this)
    //     var userTeamId = $(this).data("id");
    //     var isUserDrafted = {
    //         user_team: 1
    //     };
    //     $.ajax("api/players/" + userTeamId, {
    //         type: "PUT",
    //         data: isUserDrafted,
    //     }).then(function() {
    //         location.reload();
    //     });
    // }

    $(document).on("click", "button.user-team", function (event) {
        event.preventDefault();
        var userTeamId = $(this).attr("player-id");
        console.log(userTeamId)
        var isUserDrafted = {
            user_team: 1
        };
        $.ajax("api/players/" + userTeamId, {
            type: "PUT",
            data: isUserDrafted,
        }).then(function() {
            location.reload();
        });
    });

    $(document).on("click", "button.other-team", function (event) {
        event.preventDefault();
        var otherTeamId = $(this).attr("player-id");
        console.log(otherTeamId)
        var isOtherDrafted = {
            other_team: 1
        };
        $.ajax("api/players/" + otherTeamId, {
            type: "PUT",
            data: isOtherDrafted,
        }).then(function() {
            location.reload();
        });
    });

})