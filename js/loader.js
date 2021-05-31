window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});
var $num1 = "1/3";
var $photographer1 = "Laura Pérez";
var $title1 = "November is magic"
var $titleShadow1 = "November"
var $subtitle1 = "Perfect solution"
var $text1='Holly Golightly is a flighty Manhattan party girl, who expects "money for the powder room as well as for cab fare" for her companionship. She has even gotten a lucrative once weekly job to visit notorious convict Sally Tomato in Sing Sing, she needing to report back to Sally.';
var $img1 = "url(img/13.webp)"

//VALUE 2
var $num2 = "2/3";
var $photographer2 = "Juan Gómez";
var $title2 = "Lighting for life"
var $titleShadow2 = "Lighting"
var $subtitle2 = "A way of life"
var $text2="Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as.";
var $img2 = "url(img/17.webp)"

//VALUE 3
var $num3 = "3/3";
var $photographer3 = "Rafel Santos";
var $title3 = "Power any shot"
var $titleShadow3 = "Power"
var $subtitle3 = "Fast and slow"
var $text3="Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. Too objection for elsewhere her preferred allowance her.";
var $img3 = "url(img/2.webp)"

var i=1;
$(document).ready(function(){
    $("#heroBtn").click(function(){
        i++;
        // alert("i= "+ i);
        $("#sliderNum").text(eval('$num'+i));
        $("#sliderPhotographer").text(eval('$photographer'+i));
        $("#sliderTitle").text(eval('$title'+i));
        $("#sliderTitleShadow").text(eval('$titleShadow'+i));
        $("#sliderSubtitle").text(eval('$subtitle'+i));
        $("#sliderText").text(eval('$text'+i));
        $('#sliderImg').css("background-image", eval('$img'+i));  
        if (i == 1) {
            $( "#slash1" ).addClass( "current" );
            $( "#slash3" ).removeClass( "current" );
        }
        if (i == 2) {
            $( "#slash2" ).addClass( "current" );
            $( "#slash1" ).removeClass( "current" );
        }
        if (i == 3) {
            $( "#slash3" ).addClass( "current" );
            $( "#slash2" ).removeClass( "current" );
        }
        if (i >= 3) {
            i=0;
        }
        
    });
});