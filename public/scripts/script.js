"use strict";
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
            $("#submit").prop("disabled", false);
            $("#start").prop("disabled", false);
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
let scores = [];
$(() => {
    let randomColor;
    $('#start').on('click', function (e) {
        $("#start").prop("disabled", true);
        randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $('#colorbox').css('background-color', randomColor);
        // Grab name and time
        var userName = String($("#nameInput").val());
        var timeLimit = (Number($("#timeInput").val()) === 0 ? 59 : Number($("#timeInput").val()) - 1);
        $("#timer").html(String(timeLimit === 59 ? 60 : timeLimit + 1));
        if (userName == '') {
            window.alert("Please enter a name");
        }
        else if (timeLimit < 0 || timeLimit > 101) {
            window.alert("Please enter a correct time");
        }
        $("#submit").prop("disabled", false);
        startCountdown(timeLimit);
        $('#submit').on('click', function (e) {
            // Grab name and time
            var r_value = Number($("#r-input").val());
            var g_value = Number($("#g-input").val());
            var b_value = Number($("#b-input").val());
            var userCode = rgbToHex(r_value, g_value, b_value);
            //calculates actual RGB colors
            var actual_red = parseInt(randomColor[1] + randomColor[2], 16);
            var actual_green = parseInt(randomColor[3] + randomColor[4], 16);
            var actual_blue = parseInt(randomColor[5] + randomColor[6], 16);
            var remaining_time = Number($("#timer").text());
            var score = ((255 - Math.abs(actual_red - r_value)) + (255 - Math.abs(actual_green - g_value)) + (255 - Math.abs(actual_blue - b_value)) * Math.floor(remaining_time) * (1000 * (101 - timeLimit)));
            userName = String($("#nameInput").val());
            let scoreArray = {
                name: userName,
                scoreNum: score,
                time: String(Date.now()).slice(0, -1)
            };
            // console.log(scoreArray)
            scores.push(scoreArray);
            updateScores();
            $("#submit").prop("disabled", true); // band aid fix to stop the user from submitting multiple scores
        });
    });
});
function updateScores() {
    // arr.filter((v,i,a)=>a.findIndex(t=>(t.label === v.label && t.value===v.value))===i)
    scores = scores.filter((v, i, a) => a.findIndex(t => (t.time === v.time)) === i);
    // scores = scores.filter((v, i, a) => a.findIndex(t=>(JSON.stringify(t) === JSON.stringify(v)))===i)
    scores.sort((a, b) => {
        return (a["scoreNum"] > b["scoreNum"] ? -1 : 1);
    });
    $("#high-scores").empty();
    let out = "<tr>";
    out += "<th>User Name</th>";
    out += "<th>User High Score</th>";
    out += "</tr>";
    for (let i = 0; i < (scores.length >= 10 ? 10 : scores.length); i++) {
        out += "<tr>";
        out += `<td>${scores[i].name}</td>`;
        out += `<td>${scores[i].scoreNum}</td>`;
        out += "</tr>";
    }
    $("#high-scores").html(out);
}
