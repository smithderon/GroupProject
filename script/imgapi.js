//Main Page
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=space&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (mp){
        let irange = Math.floor(Math.random() * 10);
        let mpImg = mp.results[irange].urls.full;
        let urlLink = 'background-image: url(' + mpImg + ')'
        let bodyImg = document.getElementsByTagName('body');
        console.log(bodyImg[0].setAttribute('style', urlLink));
    });
});


//Vidya Games
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=videogames&query=games&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (vg){
        let irange = Math.floor(Math.random() * 10);
        let vgImg = vg.results[irange].urls.full;
        let urlLink = 'background-image: url(' + vgImg + ')'
        let bodyImg = document.getElementsByTagName('body');
        console.log(bodyImg[0].setAttribute('style', urlLink)); //Need to be linked when this category's clicked
    });
});


//General Knowledge
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=books&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (gk){
        let irange = Math.floor(Math.random() * 10);
        let gkImg = gk.results[irange].urls.full;
        let urlLink = 'background-image: url(' + gkImg + ')'
        let bodyImg = document.getElementsByTagName('body');
        console.log(bodyImg[0].setAttribute('style', urlLink)); //Need to be linked when this category's clicked
    });
});


//Mixed
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=nature&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (mx){
        let irange = Math.floor(Math.random() * 10);
        let mxImg = mx.results[irange].urls.full;
        let urlLink = 'background-image: url(' + mxImg + ')'
        let bodyImg = document.getElementsByTagName('body');
        console.log(bodyImg[0].setAttribute('style', urlLink)); //Need to be linked when this category's clicked
    });
});


//History
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=history&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (hs){
        let irange = Math.floor(Math.random() * 10);
        let hsImg = hs.results[irange].urls.full;
        let urlLink = 'background-image: url(' + hsImg + ')'
        let bodyImg = document.getElementsByTagName('body');
        console.log(bodyImg[0].setAttribute('style', urlLink)); //Need to be linked when this category's clicked
    });
});


//Anime/Manga
$(function(){
    $.get(`https://api.unsplash.com/search/photos?query=manga&query=anime&client_id=5958155519402e5df39e5109090cacc1df008d7403684ff22c664125eab264f5`)
    .done(function (am){
        let irange = Math.floor(Math.random() * 10);
        let amImg = am.results[irange].urls.full;
        let urlLink = 'background-image: url(' + amImg + ')'
        let bodyImg = document.getElementsByTagName('body');
        console.log(bodyImg[0].setAttribute('style', urlLink)); //Need to be linked when this category's clicked
    });
});