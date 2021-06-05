//VALUE 1
var $num1 = "1/3";
var $photographer1 = "Laura Pérez";
var $title1 = "November is magic";
var $titleShadow1 = "November";
var $subtitle1 = "Perfect solution";
var $text1='Holly Golightly is a flighty Manhattan party girl, who expects "money for the powder room as well as for cab fare" for her companionship. She has even gotten a lucrative once weekly job to visit notorious convict Sally Tomato in Sing Sing, she needing to report back to Sally.';
var $img1 = "url(img/indexJPG/13index.jpg)";
var $url1= "hero1.html";

//VALUE 2
var $num2 = "2/3";
var $photographer2 = "Juan Gómez";
var $title2 = "Lighting for life";
var $titleShadow2 = "Lighting";
var $subtitle2 = "A way of life";
var $text2="Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence. Steepest speaking up attended it as.";
var $img2 = "url(img/indexJPG/17index.jpg)";
var $url2= "hero2.html";

//VALUE 3
var $num3 = "3/3";
var $photographer3 = "Rafel Santos";
var $title3 = "Power any shot";
var $titleShadow3 = "Power";
var $subtitle3 = "Fast and slow";
var $text3="Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments.";
var $img3 = "url(img/indexJPG/2index.jpg)";
var $url3= "hero3.html";

var i=1;
//VANILLA JAVASCRIPT
document.addEventListener('DOMContentLoaded', function () {
    var heroBtn = document.querySelector('#heroBtn');
    heroBtn.addEventListener('click', function() {
        i++; 
        // alert (document.getElementById('sliderNum'));
        var sliderNum = document.querySelector('#sliderNum');
        sliderNum.textContent = eval('$num'+i);
        var sliderPhotographer = document.querySelector('#sliderPhotographer');
        sliderPhotographer.textContent = eval('$photographer'+i);
        var sliderTitle = document.querySelector('#sliderTitle');
        sliderTitle.textContent = eval('$title'+i);
        var sliderTitleShadow = document.querySelector('#sliderTitleShadow');
        sliderTitleShadow.textContent = eval('$titleShadow'+i);
        var sliderSubtitle = document.querySelector('#sliderSubtitle');
        sliderSubtitle.textContent = eval('$subtitle'+i);
        var sliderText = document.querySelector('#sliderText');
        sliderText.textContent = eval('$text'+i);
        var sliderImg = document.querySelector('#sliderImg');
        sliderImg.style.backgroundImage = eval('$img'+i);

        var a = document.getElementById('readMore');
        a.href = "hero"+i+".html";

        if (i == 1) {
            document.getElementById('slash1').className += ' current';
            document.getElementById('slash3').classList.remove("current");
        }
        if (i == 2) {
            document.getElementById('slash2').className += ' current';
            document.getElementById('slash1').classList.remove("current");

        }
        if (i == 3) {
            document.getElementById('slash3').className += ' current';
            document.getElementById('slash2').classList.remove("current");
        }
        if (i >= 3) {
            i=0;
        }

    });
    var slash1 = document.querySelector('#slash1');
    slash1.addEventListener('click', function() {
        i=1;
        var sliderNum = document.querySelector('#sliderNum');
        sliderNum.textContent = eval('$num'+i);
        var sliderPhotographer = document.querySelector('#sliderPhotographer');
        sliderPhotographer.textContent = eval('$photographer'+i);
        var sliderTitle = document.querySelector('#sliderTitle');
        sliderTitle.textContent = eval('$title'+i);
        var sliderTitleShadow = document.querySelector('#sliderTitleShadow');
        sliderTitleShadow.textContent = eval('$titleShadow'+i);
        var sliderSubtitle = document.querySelector('#sliderSubtitle');
        sliderSubtitle.textContent = eval('$subtitle'+i);
        var sliderText = document.querySelector('#sliderText');
        sliderText.textContent = eval('$text'+i);
        var sliderImg = document.querySelector('#sliderImg');
        sliderImg.style.backgroundImage = eval('$img'+i);
        var a = document.getElementById('readMore');
        a.href = "hero"+i+".html";
        document.getElementById('slash1').className += ' current';
        document.getElementById('slash2').classList.remove("current");
        document.getElementById('slash3').classList.remove("current");
    });
    var slash2 = document.querySelector('#slash2');
    slash2.addEventListener('click', function() {
        i=2;
        var sliderNum = document.querySelector('#sliderNum');
        sliderNum.textContent = eval('$num'+i);
        var sliderPhotographer = document.querySelector('#sliderPhotographer');
        sliderPhotographer.textContent = eval('$photographer'+i);
        var sliderTitle = document.querySelector('#sliderTitle');
        sliderTitle.textContent = eval('$title'+i);
        var sliderTitleShadow = document.querySelector('#sliderTitleShadow');
        sliderTitleShadow.textContent = eval('$titleShadow'+i);
        var sliderSubtitle = document.querySelector('#sliderSubtitle');
        sliderSubtitle.textContent = eval('$subtitle'+i);
        var sliderText = document.querySelector('#sliderText');
        sliderText.textContent = eval('$text'+i);
        var sliderImg = document.querySelector('#sliderImg');
        sliderImg.style.backgroundImage = eval('$img'+i);
        var a = document.getElementById('readMore');
        a.href = "hero"+i+".html";
        document.getElementById('slash2').className += ' current';
        document.getElementById('slash1').classList.remove("current");
        document.getElementById('slash3').classList.remove("current");
    });
    var slash3 = document.querySelector('#slash3');
    slash3.addEventListener('click', function() {
        i=3;
        var sliderNum = document.querySelector('#sliderNum');
        sliderNum.textContent = eval('$num'+i);
        var sliderPhotographer = document.querySelector('#sliderPhotographer');
        sliderPhotographer.textContent = eval('$photographer'+i);
        var sliderTitle = document.querySelector('#sliderTitle');
        sliderTitle.textContent = eval('$title'+i);
        var sliderTitleShadow = document.querySelector('#sliderTitleShadow');
        sliderTitleShadow.textContent = eval('$titleShadow'+i);
        var sliderSubtitle = document.querySelector('#sliderSubtitle');
        sliderSubtitle.textContent = eval('$subtitle'+i);
        var sliderText = document.querySelector('#sliderText');
        sliderText.textContent = eval('$text'+i);
        var sliderImg = document.querySelector('#sliderImg');
        sliderImg.style.backgroundImage = eval('$img'+i);
        var a = document.getElementById('readMore');
        a.href = "hero"+i+".html";
        document.getElementById('slash3').className += ' current';
        document.getElementById('slash1').classList.remove("current");
        document.getElementById('slash2').classList.remove("current");
        i=0;
    });
    // var bg0 = "#252525";
    // var bg1 = "#121212";
    // var bg2 = "#000000";
    // var bg3 = "#969696";
    // var bg4 = "#c38fff";
    // var darkBtn = document.querySelector('#darkBtn');
    // darkBtn.addEventListener('click', function() {
        
    //     var bgColor = document.querySelectorAll('.bg-color');
    //     for (var i = 0; i < bgColor.length; i++) {
    //         bgColor[i].style.backgroundColor = bg0;
    //     }
    //     document.getElementById('body').style.backgroundColor = bg1;
    //     document.querySelector('.text').style.backgroundColor = bg1;

    //     document.querySelector('header').style.backgroundColor = bg2;
    //     document.querySelector('.header ul').style.backgroundColor = bg2;

    //     document.querySelector('.header .menu-icon .navicon').style.backgroundColor = bg3;

    //     var pubInfoTitle = document.querySelectorAll('.publication__info__title');
    //     for (var i = 0; i < pubInfoTitle.length; i++) {
    //         pubInfoTitle[i].style.backgroundColor = bg4;
    //     }
    // });
    

});

// window.addEventListener("load", function() {
//     var bannerNode = document.querySelector('[alt="www.000webhost.com"]').parentNode.parentNode;
//     bannerNode.parentNode.removeChild(bannerNode);
// });

