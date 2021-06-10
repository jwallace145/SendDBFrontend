$( document ).ready(function() {
    console.log("this is from this jquery method or whatever");

    $( "#test" ).click(function() {
        console.log("that test button was clicked bruh");

        const url = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/climbers"
        $.ajax({
            url: URL,
            type: "GET",
            headers: {
                "climber_id": "2021-06-08 18:48:55.548080T1621967203918165956"
            },
            success: function(result) {
                console.log("I guess we called the API?")
                console.log(result)
            },
            error: function(error) {
                console.log("I guess calling the API failed bruh")
                console.log(error)
            }
        })
    });
});

