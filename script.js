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
    var randomNumber = Math.floor(Math.random() * quotes.length);
    $("#generator").on("click", function() {
    $("#quote").html(Object.values("“" + quotes[randomNumber].Quote + "”"));
    $("#person").html(Object.values("– " + quotes[randomNumber].Person));
    });

});
