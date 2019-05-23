
//USE THIS FORMAT TO APPEND QUESTION TO A BLACK HIDER CARD
        $("#hider-1").click(function () {
            $(this).css("background-color", "transparent")
        })

        let url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple"
            $.get(url).done((response) => {
                var question = (response.results[0].question)
                $("#hider-1").text(question)

            })







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
