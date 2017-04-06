    var quotes = [
            "Text 1",
            "Text 2",
            "Text 3"
    ];

    function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteArea").innerHTML = quotes[randomNumber];
}
