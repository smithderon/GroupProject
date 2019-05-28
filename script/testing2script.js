function Question1(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer1").text(response.results[1].incorrect_answers[0])
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`<div id="bio-content">
                   Testing bio content
                </div>`)
        //Append segment to page 
        $("#bio-container").html(`<div id="bio-content">
            testing secondary bio content.
        </div>`);
    })
    //WHEN YOU CLICK CLOSE
    // removed
    
}   
function Question2(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer1").text(response.results[1].incorrect_answers[0])
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`<div id="cv-content" class="col text-center my-auto">
        <img id="cv-image" src="images/cv.jpg" alt="Image of a CV">
    </div>`)
        //Append segment to page 
        $("#cv-container").html(`<div id="cv-content" class="col text-center my-auto">
        <img id="cv-image" src="images/cv.jpg" alt="Image of a CV">
    </div>`);
    })
        //WHEN YOU CLICK CLOSE
        $("#close").click(function(){
        Question3()
        })
}   
function Question3(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`<div id="project-1">Project 1</div>`)
        //Append segment to page 
        $("#project-container").html(`<div id="project-content">
            <div id="project-row" class="row">
                <!-- project-1 appends here -->
                <div id="project-1-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 1</div>
                </div>
            </div>
        </div>`);
    })
        //WHEN YOU CLICK CLOSE
        $("#close").click(function(){
            Question4()
        })
}   
function Question4(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`<div id="project-2">Project 2</div>`)
        //Append segment to page 
        $("#project-container").html(`<div id="project-content">
            <div id="project-row" class="row">
                <!-- project-1 appends here -->
                <div id="project-1-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 1</div>
                </div>
                <div id="project-2-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 2</div>
                </div>
            </div>
        </div>`);
    })
    //WHEN YOU CLICK CLOSE
    $("#close").click(function(){
        Question5()
    })
}   
function Question5(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`<div id="project-3-button-container" class="col-2 project-button-container">
                    <div id="project-3">Project 3</div>
                </div>`)
        //Append segment to page 
        $("#project-container").html(`<div id="project-content">
            <div id="project-row" class="row">
                <!-- project-1 appends here -->
                <div id="project-1-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 1</div>
                </div>
                <div id="project-2-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 2</div>
                </div>
                <div id="project-3-button-container" class="col-2 project-button-container">
                    <div id="project-3">Project 3</div>
                </div>
            </div>
        </div>`);
    })
    //WHEN YOU CLICK CLOSE
    $("#close").click(function(){
        Question6()
    })
}   
function Question6(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`<div id="project-4-button-container" class="col-2 project-button-container">
                    <div id="project-4">Project 4</div>
                </div>`)
        //Append segment to page 
        $("#project-container").html(`<div id="project-content">
            <div id="project-row" class="row">
                <!-- project-1 appends here -->
                <div id="project-1-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 1</div>
                </div>
                <div id="project-2-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 2</div>
                </div>
                <div id="project-3-button-container" class="col-2 project-button-container">
                    <div id="project-3">Project 3</div>
                </div>
                <div id="project-4-button-container" class="col-2 project-button-container">
                    <div id="project-4">Project 4</div>
                </div>
            </div>
        </div>`);
    })
    //WHEN YOU CLICK CLOSE
    $("#close").click(function(){
        Question7()
    })
}   
function Question7(){
    //ADDS QUESTION TO MODAL
    let url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
    $.get(url).done((response) => {
        $("#question-area").text(response.results[1].question)
        $("#answer2").text(response.results[1].incorrect_answers[1])
        $("#answer3").text(response.results[1].incorrect_answers[2])
        $("#correct-answer").text(response.results[1].correct_answer)
    })

    //WHEN YOU CLICK ON CORRECT ANSWER
    $("#correct-answer").click(function() {
        //Append page segment to modal, replacing question
        $("#question-area").html(`YOU WIN!`)
        //Append segment to page 
        $("#navbar").html(`<a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
            </ul>
        </div>`);
    })
    //WHEN YOU CLICK CLOSE
    $("#close").click(function(){
        Question8()
    })
}   
Question1()
$(document).keydown(function (keyPressed) {
    //appends CV (push 1)
    if (keyPressed.keyCode == 49) {
        $("#cv-container").append(`<div id="cv-content" class="col text-center my-auto">
        <img id="cv-image" src="images/cv.jpg" alt="Image of a CV">
    </div>`);
    }
    //appends Bio (push 2)
    if (keyPressed.keyCode == 50) {
        $("#bio-container").append(`<div id="bio-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti tempore delectus reprehenderit aliquid eum repellat, ut accusamus. Facilis ullam sit ratione odio aliquam, obcaecati dolorum nam corporis molestiae aspernatur ab!
        </div>`);
    }
    //appends Project Container and Project 1 (push 3)
    if (keyPressed.keyCode == 51) {
        $("#project-container").append(`<div id="project-content">
            <div id="project-row" class="row">
                <!-- project-1 appends here -->
                <div id="project-1-button-container" class="col-2 project-button-container">
                    <div id="project-1">Project 1</div>
                </div>
            </div>
        </div>`);
    }
    //appends Project 2 (push 5)
    if (keyPressed.keyCode == 53) {
        $("#project-row").append(`<div id="project-2-button-container" class="col-2 project-button-container">
                    <div id="project-2">Project 2</div>
                </div>`);
    }
    //appends Project 3 (push 6)
    if (keyPressed.keyCode == 54) {
        $("#project-row").append(`<div id="project-3-button-container" class="col-2 project-button-container">
                    <div id="project-3">Project 3</div>
                </div>`);
    }
    //appends Project 4 (push 7)
    if (keyPressed.keyCode == 55) {
        $("#project-row").append(`<div id="project-4-button-container" class="col-2 project-button-container">
                    <div id="project-4">Project 4</div>
                </div>`);
    }
    //appends Navbar (push 8)
    if (keyPressed.keyCode == 56) {
        $("#navbar").append(`<a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CV</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
            </ul>
        </div>`);
    }
});