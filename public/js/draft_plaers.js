$(document).ready(function() {

    var $qbContainer = $(".qb-top-five");
    var $nextRow = $(".next-qb-row")
    var qbs = [];

    getQBs();
    getRBs();
    getWRs();
    getTEs();

    function initializeRows () {
        $qbContainer.empty();
        var rowsToAdd = [];
            for (var i = 0; i < 5; i++) {
                rowsToAdd.push(createNewRow(qbs[i]))
            }
            $qbContainer.prepend(rowsToAdd)
    }

    

    function getQBs () {
        $.get("api/players/position/QB", function(data) {
            qbs = data;
            initializeRows()
        })
    }

})