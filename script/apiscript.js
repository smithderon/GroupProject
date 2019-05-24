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

    $.get(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    $.done(function (it) {
        return it.json()
    })
    $.done((returned) => {
        console.log(returned)
    })

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
})