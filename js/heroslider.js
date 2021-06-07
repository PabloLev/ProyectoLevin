document.addEventListener('DOMContentLoaded', function () { 
    let datos;
    let i = 0;
    let ajax=0;
    function ajaxCall(){
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', '../js/slider.json', true);
        xhttp.send();
        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                datos = JSON.parse(this.responseText); 
                useData();
            }
        }
    }
    function useData(){
        var res = document.querySelector('#sliderImg');
        res.innerHTML = '';
        res.innerHTML +=`
            <div class="hero__backImg ${datos[i].img}"></div>
        `
        var sliderNum = document.querySelector('#sliderNum');
        sliderNum.textContent = datos[i].num;
        var sliderPhotographer = document.querySelector('#sliderPhotographer');
        sliderPhotographer.textContent = datos[i].photographer;
        var sliderTitle = document.querySelector('#sliderTitle');
        sliderTitle.textContent = datos[i].title;
        var sliderTitleShadow = document.querySelector('#sliderTitleShadow');
        sliderTitleShadow.textContent = datos[i].titleShadow;
        var sliderSubtitle = document.querySelector('#sliderSubtitle');
        sliderSubtitle.textContent = datos[i].subtitle;
        var sliderText = document.querySelector('#sliderText');
        sliderText.textContent = datos[i].text;
        var a = document.getElementById('readMore');
        a.href = datos[i].href;
        document.getElementById('slash1').classList.remove("current");
        document.getElementById('slash2').classList.remove("current");
        document.getElementById('slash3').classList.remove("current");
        document.getElementById('slash'+(i+1)).className += ' current';
    }
    document.querySelector('#heroBtn').addEventListener('click', function(){
        if(ajax==0){
            i++;
            ajaxCall();
            ajax=1;
        }else if(i<2){
            i++;
            useData();
            if(i>=2){i=-1}
        }else{
            i=0;
            useData();
        }  
    });
    document.querySelector('#slash1').addEventListener('click', function(){
        if(ajax==0 ){
            i=0;
            ajaxCall();
            ajax=1;
        }else{
            i=0;
            useData();
        }
    });
    document.querySelector('#slash2').addEventListener('click', function(){
        if(ajax==0){
            i=1;
            ajaxCall();
            ajax=1;
        }else{
            i=1;
            useData();
        }
    });
    document.querySelector('#slash3').addEventListener('click', function(){
        if(ajax==0){
            i=2;
            ajaxCall();
            ajax=1;
        }else{
            i=2;
            useData();
            i=-1;
        }
    });
});