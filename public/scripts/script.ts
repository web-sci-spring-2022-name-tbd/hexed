function startCountdown(seconds: number) {
    let counter: number = seconds;
        
    const interval = setInterval(() => {
        $('#timer').html(String(counter));
        counter--;
        
        if (counter < 0 ) {
            clearInterval(interval);
        }
    }, 1000);
}

$(() => {
    $('#start').on('click', function(e) {
        let randomColor: string = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('#colorbox').css('background-color', randomColor);

        // Grab name and time
        var userName  = String($("#nameInput").val());
        var timeLimit = Number($("#timeInput").val());
        if (userName == '') {
            window.alert("Please enter a name");
        } else if (timeLimit < 1 || timeLimit > 100) {
            window.alert("Please enter a correct time");
        }

        startCountdown(timeLimit);
    });
});