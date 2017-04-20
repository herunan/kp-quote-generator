function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

/* ^ It's checking to see if the active window is in an iFrame.
It uses that information at the end when you try to share the quote.
If it's not in an iFrame then it pops open a new window to handle the
Twitter/Tumblr sharing without completely redirecting the page. */


$(document).ready(function() {

    setTimeout(function() {
    $("#generator").trigger("click");
},1000);

$("#generator").on("click", function() {
    var randomN = Math.floor(Math.random() * tweetArr.length);
    $("#quote").html(Object.values("“" + tweetArr[randomN] + "”"));
});

    $("#tweet-button").click(function() {
        var quoteText = $("#quote").html();
        $(".tweet").attr("href", "https://twitter.com/intent/tweet?text=" + quoteText + " %23KPquote");
    });

    // equivalent to $(document).ready(function()
$(function() {

  // define an array of elements to fade
  var elements = [$('#quote')];

  fade(); // call a custom function defined below which will execute on page load

  // on .button click, call the same function
  $('#generator').click(fade);

  function fade() {

    // for each element in elements (defined above), execute jQuery's hide() method and then fadeIn()
    $.each(elements, function(index, element) {
      element.hide().fadeIn('slow');
    });
  }
});

});
