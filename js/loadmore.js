document.addEventListener('DOMContentLoaded', function () { 
    document.querySelector('#loadMore').addEventListener('click', function(){
        obtainData();
    });
    function obtainData(){
        const xhttp = new XMLHttpRequest();
    
        xhttp.open('GET', '../js/loadmore.json', true);
    
        xhttp.send();
    
        xhttp.onreadystatechange = function(){
    
            if(this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.responseText);
                let res = document.querySelector('#res');
                // res.innerHTML = '';

                var elem = document.querySelector('#removeBtn');
                elem.parentNode.removeChild(elem);

                for(let item of datos){
                    res.innerHTML += `
                    <article class="portfolio__work ${item.img} transition">
                        <h2 class="work__title transition">${item.titulo}</h2>
                        <a class="work__btn plus-icon transition" href="${item.href}" aria-label="${item.titulo}"><i class="fas fa-plus"></i></a>
                    </article>
                    `
                }
            }
        }
    }
});