$(document).ready(function () {
    $("#mad").fadeIn(3000);
    $("#button").click(function () {
        insertInfo();
        $(".form").slideUp();
        $("#output").slideDown();
        $("#button").fadeOut();
        $("#reset").fadeIn();
    })
    $("#reset").click(function(){
        location.reload();
    })
})


// functions
var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var eight;
var nine;
var ten;

function getInfo() {
    one = $("#1").val();
    two = $("#2").val();
    three = $("#3").val();
    four = $("#4").val();
    five = $("#5").val();
    six = $("#6").val();
    seven = $("#7").val();
    eight = $("#8").val();
    nine = $("#9").val();
    ten = $("#10").val();
}

function insertInfo() {
    getInfo();
    $(one).css("color","yellow");
    var message = "<p> I got " + one + " calling a young " + two + " phone. <br> Where's Ali with the " + three + "?" + " <br> I be ballin' like a " + four +
                 " <br> I be ballin' like " + five + " <br> Sheck Wes, I ain't a " + six + " (haha, hahahahaha)" + " <br> Steph Wes stay with the " + seven + "(pa, pa, pa-pa)" +
                " <br> You " + eight + "and get poled (you get poled)" + " <br> Cause I got " + nine + "(so many" + nine + " )" + " <br> Callin' a " + ten + "phone <br> (Ring-ring, ring, ring-ring, ring, ring-ring)"
                + " <br> Where's Ali with the " + three + " dope? (huh) " + " <br> I be ballin' like a " + four + " pro (like a " + four +  "pro)" + " <br> I be ballin' like " + five + " (Bamba, Bamba) " + 
                "<br> Sheck Wes got so many flows (I do it all) <br> Call me Drake how " + six + "controlla " + " <br> Oh!" + seven + "!" + eight + "!" + nine +"!";
    $("#output").html(message).show()
}
