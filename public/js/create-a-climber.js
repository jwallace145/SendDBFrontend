$(document).ready(function () {
    $("#create-climber").click(function (event) {
        event.preventDefault();

        console.log("The create climber buttom was clicked");

        // get form values
        const email = $("#email").val()
        const username = $("#username").val()
        const firstname = $("#firstname").val()
        const lastname = $("#lastname").val()

        // create headers dictionary
        const headers = {
            "email": email,
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "Access-Control-Allow-Origin": "http://senddbbucket.s3-website-us-east-1.amazonaws.com"
        }

        // send db processor api url
        const url = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/climbers"

        // synchronous ajax api create climber call
        $.ajax({
            url: url,
            type: "PUT",
            headers: headers,
            success: function (data, status, xhr) {
                successCallback(data, status, xhr);
            },
            error: function (data, status, xhr) {
                errorCallback(data, status, xhr);
            }
        });
    })
});

function successCallback(data, status, xhr) {
    console.log("success callback bruh")

    // get http status code
    const httpStatus = xhr.status;

    // determine alert to append
    var alert;
    if (httpStatus == "200") {
        alert = `<div class="alert alert-danger alert-dismissible" role="alert">
                    Climber already exists with those details <strong>:(</strong> 
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
    } else if (httpStatus == "201") {
        alert = `<div class="alert alert-info alert-dismissible" role="alert">
                    Congratulations! You just joined a <strong>sick</strong> database of climbers!
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
    }

    // prepend alert
    $("#form-container").prepend(alert);
}

function errorCallback(data, status, xhr) {
    console.log("error callback bru");
}
