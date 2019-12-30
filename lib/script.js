// import twitterFetcher
import "./twitterFetcher.js";

// twitterFetcher configuration
let tweetArr = [];

const kpCallback = (tweets) => {
  for (var i = 0; i < tweets.length; i++) {
    tweetArr.push(`“${tweets[i].slice(17,-7)}”`);
  };
  console.log(tweetArr);
}

const kpFetch = {
  "profile": {"screenName": 'karlpilkingtonq'},
  // "domId": 'quote',
  "maxTweets": 50,
  "enableLinks": false,
  "showUser": false,
  "showTime": false,
  "showImages": false,
  "customCallback": kpCallback,
  "showInteraction": false,
  "lang": 'en'
};

twitterFetcher.fetch(kpFetch);

// checks if the active window is in an iFrame.
const inIframe = () => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};

// the new quote function selects a random quote and assigns to the current quote variable
const newQuote = () => {
    const randomNumber = [Math.floor(Math.random() * tweetArr.length)];
    const currentQuote = tweetArr[randomNumber];

    // #quote DOM selector fades out when the current quote fades into it
    $('#quote').fadeOut(300, function() {
        $(this).text(currentQuote).fadeIn(300);
    });

}

// does the following after page fully loads
$(document).ready(function() {

    // triggers quote generator .3 second after page loads in order to give time to fetch
    setTimeout(function() {
        $('#generator').trigger('click');
    }, 300);

    // defines a current quote variable and new quote function
    const currentQuote = '';
    newQuote();

    // clicking the generator button triggers the new quote function
    $('#generator').on('click', function() {
        newQuote();
    });

    // by clicking the tweet button the quote displayed in the DOM is appended to the tweet URL, along with a hashtag
    $("#tweet-button").click(function() {
        var tweetText = $("#quote").html();
        $(".tweet").attr("href", `https://twitter.com/intent/tweet?text=${tweetText} %23KarlPilkingtonQuote`);
    });

});
