//TMDB

const API_KEY='api_key=610706d1bdc74e762f2163414724355c';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL= BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const main=document.getElementById('main');


getMovies(API_URL);
function getMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML='';

    data.forEach(content__movie => {
        const {title,poster_path,overview}=content__movie;
        const movieEl=document.createElement('div');
        movieEl.classList.add('content__movie');
        movieEl.innerHTML=`
            
            <img src="${IMG_URL+poster_path}" alt="${title}">
            
            <div class="content__movie__data">
                <h3 class=content__movie__data__head>${title}</h3>
                <p class="content__movie__data__text">${overview}</p>
                <button class="content__movie__data__watch">Watch Now</button>
            </div>
        `
        
        main.appendChild(movieEl);
    })
}
