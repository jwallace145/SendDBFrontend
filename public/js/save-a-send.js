$(document).ready(function () {
    $("#save-a-send-btn").click(function (event) {
        event.preventDefault();

        console.log("you just tried to save a send bruh");

        // get form values
        const climberEmail = $("#climber-email").val();
        const route = $("#route").val();
        const grade = $("#grade").val();
        const type = $("#type").val();
        const crag = $("#crag").val();
        const style = $("#style").val();
        const ascent = $("#ascent").val();
        const height = $("#height").val();
        const pitches = $("#pitches").val();

        // set the headers
        const headers = {
            "climber_email": climberEmail,
            "name": route,
            "grade": grade,
            "type": type,
            "crag": crag,
            "style": style,
            "ascent": ascent,
            "height": height,
            "pitches": pitches
        }

        // send db processor url
        const url = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/routes";

        $.ajax({
            url: url,
            type: "POST",
            headers: headers,
            success: function (data, status, xhr) {
                successCallback(data, status, xhr);
            },
            error: function (data, status, xhr) {
                errorCallback(data, status, xhr);
            }
        })
    })
})

function successCallback(data, status, xhr) {
    console.log("this tha success call back dawg");

    // get http status code
    const httpStatus = xhr.status;

    // determine alert to append
    var alert;
    if (httpStatus == "200") {
        alert = `<div class="alert alert-danger alert-dismissible" role="alert">
                    We couldn't save that route, sorry <strong>:/</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
    } else if (httpStatus == "201") {
        alert = `<div class="alert alert-info alert-dismissible" role="alert">
                    Nice! You just recorded a <strong>send</strong> brah. Climb on.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
    }

    // prepend alert
    $("#form-container").prepend(alert);
}

function errorCallback(data, status, xhr) {
    console.log("this tha error callback bro");
}



