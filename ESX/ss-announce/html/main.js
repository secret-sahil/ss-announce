$(document).ready(function () {
    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.action == 'open') {
            startanimation(item.message)
        }
        else if (item.action == 'close') {
            stopanimation()
        }
    })
})
function startanimation(text) {
    if ($('#container').hasClass('out') && $('#textarea').hasClass('textareaout')) {
        $('#container').removeClass('out')
        $('#textarea').removeClass('textareaout')
        $('#container').addClass('in')
        $('#textarea').addClass('textareain')
    } else {
        $('#container').addClass('in')
        $('#textarea').addClass('textareain')
    }
    setTimeout(
        function () {
            $('#text').html('<h1 id="title">Server Announcement</h1><marquee>' + text + '</marquee>')
        }, 2000)
    var audio = document.getElementById("audio");
    audio.play();
}

function stopanimation() {
    $('#title').html('')
    $('#textarea').addClass('textareaout')
    setTimeout(
        function () {
            $('#container').addClass('out')
        }, 1000)
}