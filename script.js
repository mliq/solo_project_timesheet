var i = 0;
var namesArray = ["Erik", "Alicia", "Brian", "Casie", "Chelsea", "Clare", "Cody", "Jeanne", "Kaitlin", "Kelly", "Michael", "Luke", "Mary", "Aaron", "Michelle", "Rom", "Steve", "Terry", "Tracy", "Vince"];

$(document).ready(function(){

    setInterval(function() {
        $('#results').html("<p style='display: none' id='quote'>" + namesArray[i] + "</p>");
        $('#quote').fadeIn(1000);
        console.log(namesArray[i]);
        i++;
        if(i==namesArray.length){i=0};
    }, 4000);

});