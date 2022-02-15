$(() => {
    $('#start').on('click', function(e) {
        let randomColor: string = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('#color-box').css('backgrouind-color', randomColor);
    });
});