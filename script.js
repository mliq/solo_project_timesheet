var i = 0, j = 0, str, pattern, addHighlight, quotesArray;
var namesArray = ["Erik", "Alicia", "Brian", "Casie", "Chelsea", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Michael", "Luke", "Mary", "Aaron", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "KC", "Fred", "Scott", "Mark","Sherman","David","Joseph"];

// GET
$.get('quotes.data', function(data) {
    quotesArray = data.split('\n');
});


$(document).ready(function(){

    //---
    // Every 6 seconds:
    setInterval(function() {
        // Fade out the quote over 2 seconds
        $('#quote').fadeOut(2000);
        // Delay 2 seconds for fading in new quote to allow fade out to transpire.
        window.setTimeout(function(){
            // MY HIGHLIGHT FUNCTION

            // Store quote to string
            str = quotesArray[i];

            // Use regex to find names, if found add a span with class .highlight
            for(j = 0; j < namesArray.length; j++) {
                //str.replace(/(\b|^)rom/gi,"yay");
                // Set search pattern from array[j]
                pattern = new RegExp('\(\\b|^\)'+namesArray[j],'gi');
                // Set what we will replace to add highlighing.
                addHighlight = "<span class='highlight'>"+namesArray[j]+"</span>";
                str = str.replace(pattern,addHighlight);
                console.log(str);
            }
            console.log(str);
            // Add new quote hidden.
            $('#results').delay(2000).html("<p style='display: none' id='quote'>" + str + "</p>");

            // Fade in new quote over 2 seconds.
            $('#quote').fadeIn(2000);

            // Increment index
            i++;
            // If index reaches end, reset to 0.
            if(i==quotesArray.length){i=0;}
        },2000);
    }, 6000);

});