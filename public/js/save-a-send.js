$( document ).ready(function() {
    $( "#save-a-send-btn").click(function(event) {
        event.preventDefault();

        console.log("you just tried to save a send bruh")

        const climberEmail = $( "#climber-email" ).val()
        const route = $( "#route" ).val()
        const grade = $( "#grade" ).val()
        const type = $( "#type" ).val()
        const crag = $( "#crag" ).val()
        const style = $( "#style" ).val()
        const ascent = $( "#ascent" ).val()
        const height = $( "#height" ).val()
        const pitches = $( "#pitches" ).val()

        const URL = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/routes"

        $.ajax({
            url: URL,
            type: "POST",
            headers: {
                "climber_email": climberEmail,
                "name": route,
                "grade": grade,
                "type": type,
                "crag": crag,
                "style": style,
                "ascent": ascent,
                "height": height,
                "pitches": pitches
            },
            success: function(result) {
                console.log("create route successful")
                console.log(result)
            },
            error: function(error) {
                console.log("create route failed bad baddddd")
                console.log(error)
            }
        })
    })
})