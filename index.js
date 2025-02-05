$(".skills ul").slideUp();

// When the mouse is over the svg
$(".skills svg").mouseenter(function() {
    $(this).addClass("highlight");

    var skillType = $(this).attr("value");
    $("#" + skillType).slideDown();
});


// When the mouse is not over the svg
$(".skills svg").mouseleave(function() {
    $(this).removeClass("highlight");

    var skillType = $(this).attr("value");
    $("#" + skillType).slideUp();
});