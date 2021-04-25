//TMDB//

var Action = '28';
var Animationmovie = '16';
var Crime = '80';
var Drama = '18';
var Fantasy = '14';
var Horror = '27';
var genreclicked = '28';
const API_KEY = 'api_key=bdcf29627bbcab50f99211c0bb3a93c8';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const PAGE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=bdcf29627bbcab50f99211c0bb3a93c8&with_genres='+genreclicked+'&page=';
var totalpage = 0;
var currentPage = 1;
const main = document.getElementById('list');
const bodysection = document.getElementById('body');
var totalarray;
var array;
var pagenumbernow;
headgenre();

function mobmenu(x) {
    x.classList.toggle("change");
    displaymenu();
    
}
function displaymenu(){
    var toggle = document.getElementById("menulist");
    if (toggle.style.display === "none") {
        toggle.style.display = "block";
        document.getElementById('container').classList.add('fullopacity');
    } else {
        toggle.style.display = "none";
        document.getElementById('container').classList.remove('fullopacity');
    }
}
function headgenre(){
    if(genreclicked==Action){   
        const genrename= document.getElementById('headergenre');
        genrename.innerHTML = `ACTION`;
        const info= document.getElementById('top');
        info.innerHTML = `ACTION MOVIES`
        document.getElementById('action').classList.add("active");
    }else if(genreclicked==Animationmovie){
        const genrename= document.getElementById('headergenre');
        genrename.innerHTML = `ANIMATION`;
        const info= document.getElementById('top');
        info.innerHTML = `ANIMATION MOVIES`
        document.getElementById('animation').classList.add("active");
    }else if(genreclicked==Crime){
        const genrename= document.getElementById('headergenre');
        genrename.innerHTML = `CRIME`;
        const info= document.getElementById('top');
        info.innerHTML = `CRIME MOVIES`
        document.getElementById('crime').classList.add("active");
    }else if(genreclicked==Drama){
        const genrename= document.getElementById('headergenre');
        genrename.innerHTML = `DRAMA`;
        const info= document.getElementById('top');
        info.innerHTML = `DRAMA MOVIES`
        document.getElementById('drama').classList.add("active");
    }else if(genreclicked==Fantasy){
        const genrename= document.getElementById('headergenre');
        genrename.innerHTML = `FANTASY`;
        const info= document.getElementById('top');
        info.innerHTML = `FANTASY MOVIES`
        document.getElementById('fantasy').classList.add("active");
    }else if(genreclicked==Horror){
        const genrename= document.getElementById('headergenre');
        genrename.innerHTML = `HORROR`;
        const info= document.getElementById('top');
        info.innerHTML = `HORROR MOVIES`
        document.getElementById('horror').classList.add("active");
    }
}

function view(){
    document.getElementById('page1').classList.add('activepage');
    document.getElementById('movielist').setAttribute("class","show");
    document.getElementById('pages').setAttribute("class","show pagesection");
    getMovies(BASE_URL + 'discover/movie?api_key=bdcf29627bbcab50f99211c0bb3a93c8&with_genres='+genreclicked);
}

function activegenre(){
    var check = document.getElementsByClassName("genre");
    if(check.length>0){
        for(var i=0; i<check.length;i++){
            check[i].classList.remove("active");
        }
    }
}

function getgenre(genrebutton){
    activegenre();
    if(genrebutton=='action'){
        genreclicked = '28';
        headgenre();
        deleteMovies();
        document.getElementById('movielist').setAttribute("class","hidemovie");
        document.getElementById('pages').setAttribute("class","hidemovie pagesection");
    }else if(genrebutton=='animation'){
        genreclicked = '16';
        headgenre();
        deleteMovies();
        document.getElementById('movielist').setAttribute("class","hidemovie");
        document.getElementById('pages').setAttribute("class","hidemovie pagesection");
    }else if(genrebutton=='crime'){
        genreclicked = '80';
        headgenre();
        deleteMovies();
        document.getElementById('movielist').setAttribute("class","hidemovie");
        document.getElementById('pages').setAttribute("class","hidemovie pagesection");
    }else if(genrebutton=='drama'){
        genreclicked = '18';
        headgenre();
        deleteMovies();
        document.getElementById('movielist').setAttribute("class","hidemovie");
        document.getElementById('pages').setAttribute("class","hidemovie pagesection");
    }else if(genrebutton=='fantasy'){
        genreclicked = '14';
        headgenre();
        deleteMovies();
        document.getElementById('movielist').setAttribute("class","hidemovie");
        document.getElementById('pages').setAttribute("class","hidemovie pagesection");
    }else if(genrebutton=='horror'){
        genreclicked = '27';
        headgenre();
        deleteMovies();
        document.getElementById('movielist').setAttribute("class","hidemovie");
        document.getElementById('pages').setAttribute("class","hidemovie pagesection");
    }



}

function getMovies(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data);
        showMovies(data.results);
        totalpage = data.total_pages;
        console.log(totalpage);
    })
}
const pagesection = document.createElement('section');
    pagesection.setAttribute("class","pagesection");
    pagesection.setAttribute("id", "pages");
    const page = document.createElement('div');
    page.classList.add('pagination');
    page.innerHTML = `
        <a class="First number" href="#top" id="first" onClick="movieperpage(this.id)">First</a>
    `
    bodysection.appendChild(pagesection);
    pagesection.appendChild(page);
    var i;
    for (i=1; i!=10;i++){
        const pagenum = document.createElement('a');
        pagenum.setAttribute("href","#top");
        pagenum.setAttribute("id","page"+i.toString());
        pagenum.setAttribute("class","number");
        pagenum.setAttribute("onClick","movieperpage(this.id)");
        pagenum.innerHTML = `${i}`;
        page.appendChild(pagenum);
        }
    page.innerHTML+= `
    <a class="Last number" href="#top" id="last" onClick="movieperpage(this.id)" >Last</a>
    `    
    pagesection.appendChild(page);

function showMovies(data){
    var i = 0;
        data.forEach(movie => {
            const {title, poster_path, vote_average} = movie;
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            const idnum = (i+1).toString();
            movieElement.setAttribute("id", "movie");
            movieElement.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">
                <h3>${title}</h3>
                <p>Average Rating: ${vote_average}</p>
                `
                main.appendChild(movieElement, i++);
        })
        
        
        
    
}

function deleteMovies(){
    var check = document.getElementsByClassName("movie");
    if(check.length>0){

    for(var i=0; i<check.length;i++){
        check[i].classList.add('hidemovie');
    }
    
    }
}

function deactivatepage(){
    var check = document.getElementsByClassName("number");
    if(check.length>0){

    for(var i=0; i<check.length;i++){
        check[i].classList.remove('activepage');
    }
    
    }
}

function movieperpage(pagedata){
    deactivatepage();
    document.getElementById(pagedata).classList.add('activepage');
    pagenumbernow = parseInt(pagedata.charAt(4));
    if(pagedata=='first'){
        deleteMovies(); 
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=bdcf29627bbcab50f99211c0bb3a93c8&with_genres='+genreclicked+'&page=1').then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results)
            array = data.results;
        })
    }else if(pagedata=='last'){
        deleteMovies(); 
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=bdcf29627bbcab50f99211c0bb3a93c8&with_genres='+genreclicked+'&page=9').then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results)
            array = data.results;

        })
    }else{
        deleteMovies(); 
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=bdcf29627bbcab50f99211c0bb3a93c8&with_genres='+genreclicked+'&page='+pagenumbernow).then(res => res.json()).then(data => {
            console.log(data);
            showMovies(data.results)
            array = data.results;

        })
    }
    
}
