$( document ).ready(function() {
    $( "#create-climber" ).click(function(event) {
        event.preventDefault();
        console.log("the create climber button was clicked")
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
                console.log("create climber success")
                console.log(result)
            },
            error: function(error) {
                console.log("create climber failure")
                console.log(error)
            }
        })

        stufftoadd = `<div class="alert alert-info alert-dismissible" role="alert">
        Congratulations! You just joined a <strong>sick</strong> database of climbers!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    
        $( "#form-container" ).prepend(stufftoadd)
    })
});

