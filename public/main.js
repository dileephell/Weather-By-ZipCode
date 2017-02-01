$(function() {
    var $h1 = $("h1");
    var $zip = $("input[name='zip]");
    
    $("form").on("submit", function(event) {
// Prevents the form submitting normally
        event.preventDefault();
        
        var zipcode = $.trim($zip.val());
        $h1.text("Loading...");
// Sends an AJAX request
        var request = $.ajax({
            url: "/" +zipcode,
            dataType: "json"
        });
// when the request succeeds,update the header with the current temperature.        
        request.done(function(data){
            var temperature = data.temperature;
// &#176; is the HTML character code for the degree symbol            
            $h1.html("It is " + temperature + "&#176; in " + zipcode + ".");
        });
// If there's an error, make sure theat an error is shown.
        request.fail(function() {
            $h1.text("Error!");
        });
    });
});
