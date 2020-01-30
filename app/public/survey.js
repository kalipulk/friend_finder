$(document).ready(function() {
 
$("#submit-button").on("click", function(event){
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
        url:"/api/friends",
        type: "post",
        data: newFriend
    }).then(function(){
        
    })
})

});