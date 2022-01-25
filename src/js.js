// Set the date we're counting down to
let countDownDate = new Date(Date.UTC(2022, 1, 1, 0, 0, 0)).getTime();

function twoDigits(number) {
    return number < 10 ? '0' + number : number;
}

// Update the count down every 1 second
let timerInterval = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let counterText = (days ? "<span class='pr-2'>" + days + "d</span> " : "")
        + "<span>" + twoDigits(hours) + "</span>"
        + "<span>:</span>"
        + "<span>" + twoDigits(minutes) + "</span>"
        + "<span>:</span>"
        + "<span>" + twoDigits(seconds) + "</span>";

    // Display the result in the element with id="demo"
    document.getElementById("play_button_block_counter").innerHTML = counterText;
    document.getElementById("play_button_block_counter-bottom").innerHTML = counterText;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("play_button_block_button").classList.remove('disabled');
        document.getElementById("play_button_block_button-bottom").classList.remove('disabled');
        document.getElementById("play_button_block_counter").style.display = 'none';
        document.getElementById("play_button_block_counter_text").style.display = 'none';
        document.getElementById("play_button_block_counter-bottom").style.display = 'none';
    }
}, 1000);

$(document).ready(function () {

    let resizeTimeout;
    recalculateLadder();
    recalculateBoxes();

    $(window).on('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(recalculateLadder, 50);
        resizeTimeout = setTimeout(recalculateBoxes, 50);
    });

    function recalculateLadder() {
        $('.ladder').each(function () {
            let $element = $(this);
            $element.height($element.closest('section').height() + 50);
        });
    }

    function recalculateBoxes() {
        let squareFull = 971;
        $('.square_box_parent').each(function () {
            let scale = $(this).width() >= squareFull ? 1 : $(this).width() / squareFull;
            $(this).find('.square_box').css({transform: 'scale(' + (scale) + ')'});
        });
    }
})
