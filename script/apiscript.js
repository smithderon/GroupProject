
//USE THIS FORMAT TO APPEND QUESTION TO A BLACK HIDER CARD

//for loop generates 9 questions from the API and appends them to hider cards
let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
$.get(url).done((response) => {
    for(i=1; i<10; i++){
    $("#hider-"+i).text(response.results[i].question)
    }
})

//for loop that removes each hider card and text on click
for(i=1; i<10; i++){
$("#hider-"+i).click(function () {
    $(this).css("background-color", "transparent")
    $(this).css("color", "transparent")
})
}










// $(function(){
// //Video juegos

// $("#videoGames").click(function(){
//     $.get(`https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`)
//     .$.done(function (it) {
//         return it.json()
//     })

    
//     .$.done((returned) => {
//         console.log(returned)
//         $("#hider-1").html("<h2> anytext </h2>") //returned[0].question +
//     })
    
// })

// //General knowledge


// // ("$.#gnk").addListener("on","click", function(){
// //     $.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
// //     .$.done(function (it){
// //         return it.json()
// //     })
// //     $.done((returned) => {
// //         console.log(returned)
// //     })
// // })

// // //mixed

// // ("$.#mixed").addListener("on","click",function(){
// //     $.get(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
// //     .$.done(function (it) {

// //         return it.json()
// //     })
// //     $.done((returned) => {
// //         console.log(returned)
// //     })

// // })
// // //History
// // (`$.#history`).addListener("on", "click", function(){
// //     $.get(`https://opentdb.com/api.php?amount=10&category=23`)
// //     .$.done(function (it) {
// //         return it.json()
// //     })
// //     $.done((returned) => {
// //         console.log(returned)
// //     })
// // })
// // //Japanese Anime/Manga
// // ("$.#jap").addListener("on","click", function(){
// //     $.get(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium`)
// //     .$.done(function (it) {
// //         return it.json()
// //     })
// //     $.done((returned) => {
// //         console.log(returned)
// //     })
// // })
// })
