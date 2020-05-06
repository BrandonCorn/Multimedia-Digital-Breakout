
window.addEventListener('load',function(){
  const chef = B();
  if(chef.get("reachstory1") == "false"){
    //document.getElementById("video").addEventListener("ended",closeModal,true);
    chef.set("reachstory1","true");
  }
  //else{ closeModal(); }
  SetSuccessValues();
});

//button to open linked list resource in new tab
$("#linked-list-resource-button").on('click',function(){
  window.open("https://www.geeksforgeeks.org/linked-list-set-1-introduction/","blank");
});

//button to open sock challenge link
$("#challenge-button").on('click',function(){
  window.location.href = "linked-list-challenge.html";
});

//prevents answers to sock challenge from being submit and refreshing the page
$("#form-random-num").on("submit",function(e){
  e.preventDefault();
});

//prevents number guess from begin submit and refreshing the page
$("#form-answer").on("submit",function(e){
  e.preventDefault();
});

//prevent form submission of question 1 answer
$("#question-1-form").on("click",function(e){
  e.preventDefault();
});

//prevent form submission of question 2 answer
$("#question-2-form").on("click",function(e){
  e.preventDefault();
});

function SetSuccessValues(){
  const chef = B();
  chef.set("challenge-1-riddle-answer","false");
  chef.set("challenge-1-question-1","false");
  chef.set("challenge-1-question-2","false");
}


//check if all questions correctness
function CheckAllQuestions(){
  const chef = B();
  const a = chef.get("challenge-1-riddle-answer");
  const b = chef.get("challenge-1-question-1");
  const c = chef.get("challenge-1-question-2");
  if (a == "true" && b == "true" && c == "true"){
    Swal.fire({
      title: 'Great Job!',
      text:'Awesome work! Now let\'s head to Tennesee so we can meet up with Nick!',
      icon:'success',
    }).then(function(result){
      window.location.href="../pals-story/queue-pals.html";
    });
  }
}

//validates the answer for correctness, makes visible link to next challenge upon positive validation
$("#answer-button").on("click",function(){
  //CheckAnswer();
  var pop = $('#answer-button').popover({content: "Try again!", });
  var answer = $("#answer-input").val()
  if (CheckAnswer(answer)){
    pop.popover("dispose");
    pop.popover({content: "Great work!",})
    pop.popover('show');
    CheckAllQuestions();
  }
  else{
    pop.popover("show");
    $('#form-answer').trigger('reset');
  }
});


function CheckAnswer(input){
  const chef = B();
  var regexAnswer = new RegExp("(piano)","gi")
  if (regexAnswer.test(input)){
    chef.set("challenge-1-riddle-answer","true");
    return true;
  }
  else{
    return false;
  }
}

//validates question 1 answer
function ValidateQuestionOne(input){
  const chef = B();
  const regexAnswer1 = new RegExp("(dynamic)","gi");
  const regexAnswer2 = new RegExp("(insertion)|(deletion)","gi");
  if (regexAnswer1.test(input) || regexAnswer2.test(input)){
    chef.set("challenge-1-question-1","true");
    return true;
  }
  else {
    return false;
  }
}

//button calls for question 1 validation
$("#q-1-button").on("click",function(){
  //var c = C();
  const answer = $("#q-1-answer").val();
  var pop = $('#q-1-button').popover({content: "Try again!", });
  if (ValidateQuestionOne(answer)){
    pop.popover("dispose");
    pop.popover({content: "Great work!",})
    pop.popover('show');
    CheckAllQuestions();
  }
  else {
    pop.popover('show');
    $('#question-1-form').trigger('reset');
    }
});

//validates question 2
function ValidateQuestionTwo(input){
  const chef = B();
  const regexAnswer1 = new RegExp("(?=.*extra)(?=.*memory)","gi");
  const regexAnswer2 = new RegExp("(?=.*no)(?=.*random)(?=.*access)|(?=.*random)(?=.*access)(?=.*not)","gi")
  const regexAnswer3 = new RegExp("(?=.*not)(?=.*cache)(?=.*friendly)","gi")
  if (regexAnswer1.test(input) || regexAnswer2.test(input) || regexAnswer3.test(input)){
    chef.set("challenge-1-question-2","true");
    return true;
  }
  else {
    return false;
  }

}
//button calls for question 2 validation
$("#q-2-button").on("click",function(){
  //var c = C();
  const answer = $("#q-2-answer").val();
  var pop = $('#q-2-button').popover({content: "Try again!", });
  if (ValidateQuestionTwo(answer)){
    pop.popover("dispose");
    pop.popover({content: "Great work!",})
    pop.popover('show');
    CheckAllQuestions();
  }
  else {
    pop.popover('show');
    $('#question-2-form').trigger('reset');
  }
});

//NOT USING THIS RANDOM NUMBER GUESS FOR HINT -------------------------------

//upon clicking this button you submit your answer to be analyzed
//It will be check to make sure it is a digit and is within the range of guesses
//Once validation is accepted, input is compared.

/**constants
const c = {
  num : Math.floor((Math.random() * 19) + 1),
  count : 0,
  increment : function(){
    this.count++;
  }
};


$("#random-number").on('click',function(){
  checkRandomNum();
});


function checkRandomNum(){
$("#random-number").popover("dispose");
var pop;
var correct = false;
var regex = /[0-9 -()+]+$/;
var numInputForRegex = $("#user-num-guess").val();
//input validation
if (c.count >=3){
  pop = $("#random-number").popover({content: "You have no more guesses left", trigger : "hover", delay : {"show" : 500, "hide" : 100},});
  pop.popover("show");
  //pop = $("#random-number").popover({content: "You have no more guesses left", trigger : "hover", delay : {"hide" : 0},});
  //pop.popover("show");
  $("#random-number").prop("disabled",true);
}
else if (!(regex.test(numInputForRegex))){
  pop = $("#random-number").popover({content: "Not a valid entry, enter a number",});
  pop.popover("show");
}
else if (numInputForRegex > 20 || numInputForRegex < 0){
  pop = $("#random-number").popover({content: "Not a valid entry, number must be between 1 and 20",});
  pop.popover("show");
}
else{
  c.increment();
  var userNum = parseInt($("#user-num-guess").val());
  if(userNum < c.num){
    pop = $("#random-number").popover({content: userNum + " is lower than the random number",});
    pop.popover("show");

  }
  else if (userNum > c.num){
    pop = $("#random-number").popover({content: userNum + " is higher than the random number",});
    pop.popover("show");
  }
  else{
    correct = true;
    pop = $("#random-number").popover({content: "Congratulations, you got it", trigger: "hover", delay: {"hide": 0},});
    pop.popover("show");
    $("#form-random-num").trigger("reset");
    $("#challenge-hint").removeClass("invisible");
  }
}


$('#form-random-num').trigger('reset');
};
**/
