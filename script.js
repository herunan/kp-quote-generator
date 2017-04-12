$(document).ready(function() {

    var quotes = [{
            Quote: "Text 1",
            Person: "Karl Pilkington"
        },
        {
            Quote: "Text 2",
            Person: "Karl Pilkington"
        },
        {
            Quote: "Text 3",
            Person: "Karl Pilkington"
        },
    ];
    $("#generator").on("click", function() {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        $("#quote").html(Object.values("“" + quotes[randomNumber].Quote + "”"));
        $("#person").html(Object.values(" – " + quotes[randomNumber].Person));
    });
    $("#tweet-button").click(function() { // create if alert for when text is not generated OR generate text on load
        var quoteText = document.getElementById("quote-area").innerText;
        $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quoteText + "%23KPquotes");
    });

});
