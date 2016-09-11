/* JavaScript and Jquery put together by TheWikiaEditMachine, designed to be used on multiple wikias*/
 
$(document).ready(function(){
//the content that shows right when the home page is loaded
        $("#Content1").css("display", "block");
        $("#Content4").css("display", "block");
        $("#Content6").css("display", "block");
        $("#Content9").css("display", "block");
        $("#Header1").addClass("hp-selected");
        $("#Header4").addClass("hp-selected");
        $("#Header6").addClass("hp-selected");
        $("#Header9").addClass("hp-selected");
        $("#Content2").css("display", "none");
        $("#Content3").css("display", "none");
        $("#Content5").css("display", "none");
        $("#Content7").css("display", "none");
        $("#Content8").css("display", "none");
}); 
 
// home page click functions
    $("#Header1").click(function(){
        $("#Content1").css("display", "block");
        $("#Content2").css("display", "none");
        $("#Content3").css("display", "none");
        $("#Header1").addClass("hp-selected");
        $("#Header2").removeClass("hp-selected");
        $("#Header3").removeClass("hp-selected");
    });
 
    $("#Header2").click(function(){
        $("#Content2").css("display", "block");
        $("#Content1").css("display", "none");
        $("#Content3").css("display", "none");
        $("#Header2").addClass("hp-selected");
        $("#Header1").removeClass("hp-selected");
        $("#Header3").removeClass("hp-selected");
    });
 
    $("#Header3").click(function(){
        $("#Content3").css("display", "block");
        $("#Content1").css("display", "none");
        $("#Content2").css("display", "none");
        $("#Header3").addClass("hp-selected");
        $("#Header1").removeClass("hp-selected");
        $("#Header2").removeClass("hp-selected");
    });
 
    $("#Header4").click(function(){
        $("#Content4").css("display", "block");
        $("#Content5").css("display", "none");
        $("#Header4").addClass("hp-selected");
        $("#Header5").removeClass("hp-selected");
    });
 
    $("#Header5").click(function(){
        $("#Content5").css("display", "block");
        $("#Content4").css("display", "none");
        $("#Header5").addClass("hp-selected");
        $("#Header4").removeClass("hp-selected");
    });
 
    $("#Header6").click(function(){
        $("#Content6").css("display", "block");
        $("#Content7").css("display", "none");
        $("#Header6").addClass("hp-selected");
        $("#Header7").removeClass("hp-selected");
    });
 
    $("#Header7").click(function(){
        $("#Content7").css("display", "block");
        $("#Content6").css("display", "none");
        $("#Header7").addClass("hp-selected");
        $("#Header6").removeClass("hp-selected");
    });
 
    $("#Header8").click(function(){
        $("#Content8").css("display", "block");
        $("#Content9").css("display", "none");
        $("#Header8").addClass("hp-selected");
        $("#Header9").removeClass("hp-selected");
    });
 
    $("#Header9").click(function(){
        $("#Content9").css("display", "block");
        $("#Content8").css("display", "none");
        $("#Header9").addClass("hp-selected");
        $("#Header8").removeClass("hp-selected");
    });


var dankMemes = $(".TWEMHeader").click(function(){
dankMemes.attr('id').parent().children().css("display", "none");
dankMemes.attr('id').css("display", "block");
});
