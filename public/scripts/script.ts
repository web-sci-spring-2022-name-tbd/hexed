$(() => {
    $('#start').on('click', function(e) {
        // Grab name and time
        var userName  = String($("#nameInput").val());
        var timeLimit = Number($("#timeInput").val());
        if (userName == '') {
            window.alert("Please enter a name");
        } else if (timeLimit < 1 || timeLimit > 100) {
            window.alert("Please enter a correct time");
        }

        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    });
});
