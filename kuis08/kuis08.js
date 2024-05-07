$(document).ready(function() {
    $("#fadeInBtn").click(function() {
        $("#box").fadeIn();
    });

    $("#fadeOutBtn").click(function() {
        $("#box").fadeOut();
    });

    $("#slideDownBtn").click(function() {
        $("#slideBox").slideDown();
    });

    $("#slideUpBtn").click(function() {
        $("#slideBox").slideUp();
    });

    $("#showBtn").click(function() {
        $("#toggleBox").show();
    });

    $("#hideBtn").click(function() {
        $("#toggleBox").hide();
    });
});
