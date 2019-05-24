//Main Page
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=space&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (r){
        console.log(r.results[0].urls.full);
    });
});

//Vidya Games
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=videogames&query=games&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (r){
        console.log(r.results[1].urls.full);
    });
});

//General Knowledge
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=books&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (r){
        console.log(r.results[3].urls.full);
    });
});

//Mixed
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=nature&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (r){
        console.log(r.results[2].urls.full);
    });
});

//History
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=history&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (r){
        console.log(r.results[1].urls.full);
    });
});

//Anime/Manga
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=manga&query=anime&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (r){
        console.log(r.results[3].urls.full);
    });
});