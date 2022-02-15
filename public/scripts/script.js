"use strict";
// import $ from "jquery";
function updateRed(val) {
    $("#red_value").val(val);
}
function updateGreen(val) {
    $("#green_value").val(val);
}
function updateBlue(val) {
    $("#blue_value").val(val);
}
function startCountdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        $('#timer').val(counter);
        counter--;
        if (counter < 0) {
            clearInterval(interval);
        }
    }, 1000);
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
$(() => {
    $('#start').on('click', function (e) {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $('#color-box').css('backgrouind-color', randomColor);
        // Grab name and time
        var userName = String($("#nameInput").val());
        var timeLimit = Number($("#timeInput").val());
        if (userName == '') {
            window.alert("Please enter a name");
        }
        else if (timeLimit < 1 || timeLimit > 100) {
            window.alert("Please enter a correct time");
        }
        startCountdown(timeLimit);
    });
});
