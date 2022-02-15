$(() => {
    $('#start').on('click', function(e) {
<<<<<<< HEAD
        let randomColor: string = '#' + Math.floor(Math.random()*16777215).toString(16);
        $('#color-box').css('backgrouind-color', randomColor);
=======
        
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
>>>>>>> ebb0a4319f7d9fb987b03c10d03ec217416550a5
    });
});
