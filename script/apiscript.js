
//USE THIS FORMAT TO APPEND QUESTION TO A BLACK HIDER CARD

//~~~~VIDEO GAME SECTION~~~~



//retrieves question from API and appends it to the modal dialog box
let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
$.get(url).done((response) => {
    $("#question-modal").text(response.results[1].question)
})



//for loop that removes each hider card and text on click
for(i=1; i<10; i++){
$("#hider-"+i).click(function () {
    $(this).css("background-color", "transparent")
    $(this).css("color", "transparent")
})
}

//ALFIE'S OLD CODE
// //for loop generates 9 questions from the API and appends them to hider cards
// let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
// $.get(url).done((response) => {
//     for(i=1; i<10; i++){
//     $("#hider-"+i).text(response.results[i].question)
//     }
// })










//**** TO DO ****
//1. make the other question categories
//2. add multiple choice options to hider cards
//3. make cards disappear when user answers question correcty, rather than clicking
//4. make the modal appear with a keystroke rather than by clicking a button
















//DERON'S API EXTRACTORS

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
