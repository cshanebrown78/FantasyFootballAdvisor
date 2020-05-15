$(document).ready(function() {

    var qbContainer = $(".qb-container");
    var rbContainer = $(".rb-container");
    var wrContainer = $(".wr-container");
    var teContainer = $(".te-container");
    var qbList = $(".qbs")
    var nextRow = $(".next-qb-row")
    var qbs = [];
    // $(document).on("click", "button.user-team", userDraft)

    getQBs();
    getRBs();
    getWRs();
    getTEs();


    function createNewRow(positionData) {
        var newTR = $("<tr>");
        // newTR.data("quarterback", qbData);
        newTR.append("<td>" + positionData.player_name + "</td>");
        newTR.append("<td>" + positionData.draft_rank + "</td>");
        newTR.append("<td>" + positionData.team_name + "</td>");
        newTR.append("<td><button class='user-team'>Draft</button></td>");
        newTR.append("<td><button class='other-team'>Drafted</button></td>")
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
            console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        console.log(rowsToAdd)
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
            console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        console.log(rowsToAdd)
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
            console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        console.log(rowsToAdd)
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
            console.log(undrafted)
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(undrafted[i]))
                        console.log(rowsToAdd)
                    }
                teContainer.append(rowsToAdd)
        });
    };

    // function userDraft() {
    //     var userTeam = 
    // }

})