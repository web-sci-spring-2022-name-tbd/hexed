"use strict";
// import $ from "jquery";
function updateValue(val, color) {
    $(`#${color}-val`).val(val);
}
function startCountdown(seconds) {
    let counter = seconds;
    const interval = setInterval(() => {
        $('#timer').html(String(counter));
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
    let randomColor;
    $('#start').on('click', function (e) {
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $('#colorbox').css('background-color', randomColor);
        // Grab name and time
        var userName = String($("#nameInput").val());
        var timeLimit = (Number($("#timeInput").val()) === 0 ? 60 : Number($("#timeInput").val()));
        if (userName == '') {
            window.alert("Please enter a name");
        }
        else if (timeLimit < 1 || timeLimit > 100) {
            window.alert("Please enter a correct time");
        }
        startCountdown(timeLimit);
        $('#submit').on('click', function (e) {
            // Grab name and time
            var r_value = Number($("#r-input").val());
            var g_value = Number($("#g-input").val());
            var b_value = Number($("#b-input").val());
            var userCode = rgbToHex(r_value, g_value, b_value);
            console.log("code: " + userCode);
        });
    });
});
