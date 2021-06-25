$(document).ready(function () {
    $("#check-out-sends-btn").click(function (event) {
        event.preventDefault();

        console.log("check out sends button was pressed bruh");

        // get form values
        const climberEmail = $("#climber-email").val();

        // set the headers
        const headers = {
            "climber_email": climberEmail
        }

        // send db processor url
        const url = "https://b1rzvmzxb5.execute-api.us-east-1.amazonaws.com/dev/climbers/sends";

        // make ajax request
        $.ajax({
            url: url,
            type: "GET",
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

function successCallback(data, success, xhr) {
    console.log("this is the success callback from the check out send thing bruh");
    console.log(data)
}

function errorCallback(data, success, xhr) {
    console.log("error callback from check sends braaaah");
}