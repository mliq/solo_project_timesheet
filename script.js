var namesArray = ["Erik", "Alicia", "Brian", "Casie", "Chelsea", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Michael", "Luke", "Mary", "Aaron", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince", "KC", "Fred", "Scott", "Mark","Sherman","David","Joseph"];
var quotesArray;

// GET SYNCHRONOUSLY

$.ajax({
    url: 'quotes.data',
    dataType: 'text',
    async: false,
    success: function(data) {
        quotesArray = data.split('\n');
        // Process Data
        quotesArray = highlight(quotesArray,namesArray);
        // Display
        $(document).ready(function(){
            display();
        });
    }
});

function highlight(replaceThese, withThese){
/*
This function takes an array of text and finds words listed in a second array to add a 'highlight' class to them which can then be styled.
Case insensitive, but will not find the strings inside of other words. ("rom" matches "Rom", placed anywhere in a line, but not the rom in "from").
You can modify this aspect by altering the RegExp object that is assigned to 'pattern'.
*/

    // Declare variables
    var i = 0, j = 0, pattern, addHighlight;
    var newArray = [];

    // Iterate through array to be replaced (replaceThese)
    for(i = 0; i < replaceThese.length; i++){
        newArray.push(replaceThese[i]);
        // Iterate through word list (withThese), use regex to search, if found add a span with class .highlight

        for(j = 0; j < withThese.length; j++) {

            // Get search word from withThese array, place into RegExp object with appropriate regex flags.
            pattern = new RegExp('\(\\b|^\)'+withThese[j],'gi');
            // Store HTML string that adds span tag and highlight class around found words.
            addHighlight = "<span class='highlight'>"+withThese[j]+"</span>";
            // Replace targeted words with the HTML string.
            newArray[i] = newArray[i].replace(pattern,addHighlight);
        }
    }
    return newArray;
}

function display() {
    var i = 0;
    //Every 6 seconds:
    setInterval(function () {
        // Fade out the quote over 2 seconds
        $('#quote').fadeOut(2000);
        // Delay 2 seconds for fading in new quote to allow fade out to transpire.
        window.setTimeout(function () {
            // Add new quote hidden.
            $('#results').delay(2000).html("<p style='display: none' id='quote'>" + quotesArray[i] + "</p>");

            // Fade in new quote over 2 seconds.
            $('#quote').fadeIn(2000);

            // Increment index
            i++;
            // If index reaches end, reset to 0.
            if (i == quotesArray.length) {
                i = 0;
            }
        }, 2000);
    }, 6000);
}

