var yourName = "LJ";
var friendsName = "kira";
var messages = 1;
    
$(".received").css("background-color", "hotpink");
$(".sent").css("background-color", "pink");

$(".sent").show();

$(".sendLj").click(function() {
    var lj = $(".your-input").val();
    $(".sent").append("<p>" + lj + "</p>");
    $(".sent").css("color", "black");
});

$(".sendKira").click(function() {
    var kira = $(".friend-input").val();
    messages++;
    $(".received").append("<p>" + kira + "</p>");
    $(".received").css("color", "white");
    $("h4").text("Number of messages received: " + messages);
});





//DON'T CHANGE THIS CODE

var realYourName, realFriendName;

try {
    realYourName = eval('yourName');
    realFriendName = eval('friendsName');
} catch (_e) {}

updateNames();

function updateNames(){
    $(".your-name").text(realYourName);
    $(".friends-name").text(realFriendName);
}