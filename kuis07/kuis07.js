$(document).ready(function() {

  $("#clickButton").on("click", function() {
    alert("Click event triggered!");
  });

  $("#dblClickButton").on("dblclick", function() {
    alert("Double click event triggered!");
  });

  $("#Form").on("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
  });

  $("#mouseEvent").on({
    mouseenter: function() {
      $(this).text("Mouse entered!");
    },
    mouseleave: function() {
      $(this).text("Hover over me!");
    }
  });
});