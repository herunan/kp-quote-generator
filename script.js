// checks if the active window is in an iFrame.
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// does the following after page fully loads
$(document).ready(function() {

    // triggers quote generator a second after page loads
    setTimeout(function() {
        $('#generator').trigger('click');
    }, 1000);

    // defines a current quote variable and new quote function
    var currentQuote = '';
    newQuote();

    // clicking the generator button triggers the new quote function
    $('#generator').on('click', function() {
        newQuote();
    });

    // the new quote function selects a random quote and assigns to the current quote variable
    function newQuote() {
        randomNumber = [Math.floor(Math.random() * tweetArr.length)];
        currentQuote = tweetArr[randomNumber];

        // #quote DOM selector fades out when the current quote fades into it
        $('#quote').fadeOut(600, function() {
            $(this).text(currentQuote).fadeIn(600);
        });

    }

    // by clicking the tweet button the quote displayed in the DOM is appended to the tweet URL, along with a hashtag
    $("#tweet-button").click(function() {
        var tweetText = $("#quote").html();
        $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + tweetText + " %23KPquote");
    });

});