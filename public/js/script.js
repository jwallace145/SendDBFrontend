$( document ).ready(function() {
    console.log("this is from this jquery method or whatever");

    $( "#test" ).click(function() {
        console.log("that test button was clicked bruh");

        const URL = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/climbers"
        $.ajax({
            url: URL,
            type: "GET",
            headers: {
                "climber_id": "2021-06-08 18:48:55.548080T1621967203918165956",
                "Access-Control-Allow-Origin": "http://senddbbucket.s3-website-us-east-1.amazonaws.com"
            },
            success: function(result) {
                console.log("I guess we called the API?")
                console.log(result)
            },
            error: function(error) {
                console.log("I guess calling the API failed bruh")
                console.log(error)
            }
        });
    });

    $( "#insertClimber" ).click(function() {
        console.log("that insert climber buttoon was clicked bruh");

        const email = $( "#email" ).val()
        const username = $( "#username" ).val()
        const firstname = $( "#firstname" ).val()
        const lastname = $( "#lastname" ).val()

        const URL = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/climbers"

        $.ajax({
            url: URL,
            type: "PUT",
            headers: {
                "email": email,
                "username": username,
                "first_name": firstname,
                "last_name": lastname,
                "Access-Control-Allow-Origin": "http://senddbbucket.s3-website-us-east-1.amazonaws.com"
            },
            success: function(result) {
                console.log("I guess the call to the post worked bruh")
                console.log(result)
            },
            error: function(error) {
                console.log("I guess the call to the post climber failed bruh")
                console.log(error)
            }
        });
    });
});

