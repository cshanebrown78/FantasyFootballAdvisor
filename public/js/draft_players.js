$(document).ready(function() {

    var qbContainer = $(".qb-container");
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
        newTR.append("<td>" + qbData.team_name + "</td>");
        newTR.append("<td><button class='user-team'>Draft</button></td>");
        newTR.append("<td><button class='other-team'>Drafted</button></td>")
        newTR.append("</tr>")
        return newTR;
        
    }

    function getQBs () {
        $.get("/api/players/position/QB", function(data) {
            console.log(data);
            
                var rowsToAdd = [];
                    for (var i = 0; i < 5; i++) {
                        rowsToAdd.push(createNewRow(data[i]))
                        console.log(rowsToAdd)
                    }
                qbContainer.append(rowsToAdd)
                
               
            
        })
    }

    // function getQBs () {
    //     $.get("/api/players/position/QB", function(data) {
    //         console.log(data);
    //         for(var j = 0; j < data.length; j++) {
    //             var undrafted = [];
    //             if(data.user_team === 0 && data.other_team === 0) {
    //             undrafted.push(data[j]);
    //             }
    //             var rowsToAdd = [];
    //                 for (var i = 0; i < 5; i++) {
    //                     rowsToAdd.push(createNewRow(undrafted[i]))
    //                     console.log(undrafted)
    //                 }
    //             qbContainer.append(rowsToAdd)
    //             console.log(rowsToAdd)
    //         }    
    //         console.log("Undrafted = " + undrafted)
    //     })
    // }

})