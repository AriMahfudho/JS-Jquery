$(document).ready(function() {
    $("#setTextBtn").click(function() {
        $("#textParagraph").text("New Text");
    });

    $("#appendBtn").click(function() {
        $("#appendContainer").append("<p>Appended Text</p>");
    });

    $("#attrBtn").click(function() {
        $("#attrImage").attr("src", "new_image.jpg");
        $("#attrImage").attr("alt", "New Image");
    });

    $("#removeBtn").click(function() {
        $("#removeDiv").remove();
    });

});
