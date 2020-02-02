$(document).ready(function () {

    let matchContainer = $(".best-match");
    let matchName = $(".best-match-name");
    let matchImage = $(".best-match-img");
    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        console.log("you got clicked");
        var newFriend = {
            name: $("#name-input").val(),
            image: $("#image-input").val(),
            score: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        }
        console.log(newFriend);
        $.ajax({
            url: "/api/friends",
            type: "post",
            data: newFriend
        }).then(function (data) {
            matchImage.attr("src", data.image);     
            matchName.html(data.name);                   
        })
    })

});