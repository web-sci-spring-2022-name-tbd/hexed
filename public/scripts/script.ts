// import $ from "jquery";

function updateRed(val: number) {
    $("#red_value").val(val);
}

function updateGreen(val: number) {
    $("#green_value").val(val);
}

function updateBlue(val: number) {
    $("#blue_value").val(val);
}

function startCountdown(seconds: number) {
    let counter: number = seconds;

    const interval = setInterval(() => {
        $('#timer').val(counter);
        counter--;

        if (counter < 0) {
            clearInterval(interval);
        }
    }, 1000);
}

function componentToHex(c: number) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

$(() => {
    $('#start').on('click', function (e) {
        let randomColor: string = '#' + Math.floor(Math.random() * 16777215).toString(16);
        $('#color-box').css('backgrouind-color', randomColor);

        // Grab name and time
        var userName = String($("#nameInput").val());
        var timeLimit = Number($("#timeInput").val());
        if (userName == '') {
            window.alert("Please enter a name");
        } else if (timeLimit < 1 || timeLimit > 100) {
            window.alert("Please enter a correct time");
        }

        startCountdown(timeLimit);
    });
});

$(() => {
    $('#submit').on('click', function (e) {
        // Grab name and time
        var r_value = Number($("#r-input").val());
        var g_value = Number($("#g-input").val());
        var b_value = Number($("#b-input").val());
        if (rgbToHex(r_value, g_value, b_value) == randomColor) {

        }
    });
});