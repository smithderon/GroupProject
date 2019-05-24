$(function(){
    let count = 0
//Video juegos
    $("#btnModal").click(function(){

    
    $.get(`https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`)
    .done(function (it){

        console.log(it.results)
        $("#question").html(it.results[count].question)
        $("#Answer1").html(it.results[count].incorrect_answers[1])
        $("#Answer2").html(it.results[count].incorrect_answers[2])
        $("#Answer3").html(it.results[count].incorrect_answers[0])
        $("#Answer4").html(it.results[count].correct_answer)

    })
})
let wrong = () => {
    for(let i = 0; i <= count; i ++){
        $("#hider-" + i).html("Wow, looks like you failed, huh?")
    }
    count = 0 
}
$("#Answer4").click(function(){
    count += 1
    if (count != 5){
    $("#hider-" + count).html("Ohoho, Got it right, did ya? Click me, now!")
    }
})
for (var g = 1; g <= 3; g ++){
    $("#Answer" + g).click(function(){
        wrong()
    })
}
//General knowledge


$("#gnk").click( function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
    .done(function (it) {
        
    })
    $.done((returned) => {
        console.log(returned)
    })
})

//mixed
$("#mixed").click(function(){


//for loop that removes each hider card and text on click
for(i=1; i<10; i++){
$("#hider-"+i).click(function () {
    $(this).css("background-color", "transparent")
    $(this).css("color", "transparent")
})
//History
$(`#history`).click( function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=23`)
    $.done(function (it) {
        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })
})
//Japanese Anime/Manga
$("#jap").click( function(){
    $.get(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium`)
    $.done(function (it) {
        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })
})
}
})
})

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