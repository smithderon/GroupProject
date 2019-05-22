//Video juegos

$.get(`https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`)
    .$.done(function (it) {
        return it.json()
    })
    .$.done((returned) => {
        console.log(returned)
    })
//General knowledge
$.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
    .$.done(function (it) {
        return it.json()
    })
    .$.done((returned) => {
        console.log(returned)
    })

//mixed
$.get(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    .$.done(function (it) {
        return it.json()
    })
    .$.done((returned) => {
        console.log(returned)
    })

//History
$.get(`https://opentdb.com/api.php?amount=10&category=23`)
    .$.done(function (it) {
        return it.json()
    })
    .$.done((returned) => {
        console.log(returned)
    })

//Japanese Anime/Manga
$.get(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium`)
    .$.done(function (it) {
        return it.json()
    })
    .$.done((returned) => {
        console.log(returned)
    })