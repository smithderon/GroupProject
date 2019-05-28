{/* <button data-dismiss= "modal" type="button" id="Answer4" class="btn btn-primary">Correct Answer</button>
<button data-dismiss= "modal" type="button" id="Answer1" class="btn btn-primary">Answer 1</button>
<button data-dismiss= "modal" type="button" id="answer2" class="btn btn-primary">Answer 2</button>
<button data-dismiss= "modal" type="button" id="answer3" class="btn btn-primary">Answer 3</button> */}
$(function(){
    let count = 0
//Video juegos
let factor = () => { min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (5 - 1)) + 1}
let answerArray = []
let modal = $("modalFoot").html()

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

let answerCreation = function(answerArray){
    for(var i = 1; i <= 4; i++){
        let choice = `<button data-dismiss= "modal" type="button" id="Answer${i}" class="btn btn-primary"></button>`
        answerArray.push(choice)
        
    }
    shuffleArray(answerArray)
    return answerArray
}
    $("#btnModal").click(function(){

    
    $.get(`https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`)
    .done(function (it){
        answerCreation(answerArray)
        for(var b = 0; b <= answerArray.length; b++){
            if(typeof(b) == typeof(1)){
            modal += answerArray[b]
            }
        }   
        console.log(answerArray)
        console.log(modal)
        $("#question").html(it.results[count].question),
        $("#Answer1").html(it.results[count].incorrect_answers[1]),
        $("#Answer2").html(it.results[count].incorrect_answers[2]),
        $("#Answer3").html(it.results[count].incorrect_answers[0]),
        $("#Answer4").html(it.results[count].correct_answer)
    
    })
})
// let wrong = () => {
//     for(let i = 0; i <= count; i ++){
//         $("#hider-" + i).html("Wow, looks like you failed, huh?")
//     }
//     count = 0 
// }
$("#Answer4").click(function(){
    count ++
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