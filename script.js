$(document).ready(function() {

    setTimeout(function() {
    $("#generator").trigger("click");
},1000);

$("#generator").on("click", function() {
    var randomN = Math.floor(Math.random() * tweetArr.length);
    $("#quote").html(Object.values("“" + tweetArr[randomN] + "”"));
});

    $("#tweet-button").click(function() {
        var quoteText = document.getElementById("quote-area").innerText;
        $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quoteText + " %23KPquotes");
    });
});
