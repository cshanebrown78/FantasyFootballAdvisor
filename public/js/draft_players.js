$(document).ready(function() {

    var qbContainer = $(".qb-top-five");
    var qbList = $(".qbs")
    var nextRow = $(".next-qb-row")
    var qbs = [];

    getQBs();
    getRBs();
    getWRs();
    getTEs();

    // function initializeRows () {
    //     qbContainer.empty();
    //     var rowsToAdd = [];
    //         for (var i = 0; i < 5; i++) {
    //             rowsToAdd.push(createNewRow(qbs[i]))
    //         }
    //         qbContainer.prepend(rowsToAdd)
    // }

    function createNewRow(qbData) {
        var newTR = $("<tr>");
        newTR.data("quarterback", qbData);
        newTR.append("<td>" + qbData.player_name + "</td>");
        newTR.append("<td>" + qbData.draft_rank + "</td>");
        newTR.append("<td>" + qbData.team_name + "<td>");
        newTR.append("<td><button class='user-team'>Draft</button></td>");
        newTR.append("<td><button class='other-team'>Drafted</button></td>")
        return newTR;
    }

    function getQBs () {
        $.get("api/players/position/QB", function(data) {
            for(var j = 0; j < data.length; j++) {
                var undrafted = [];
                undrafted.push(data[i]);
                for (var i = 0; i < 5; i++) {
                    rowsToAdd.push(createNewRow(undrafted[i]))
                }
            }    
            // renderQBList(rowsToAdd);
        })
    }

})