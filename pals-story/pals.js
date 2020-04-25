//import {checkRandomNum} from 'comic_con.js';

//open queue challenge page on button click, belongs to story page
$("#challenge-button").on("click",function(){
  window.location.href="queue-challenge.html";
});

//open resource page for queues on button click, belongs to story page
$("#queue-resource-button").on("click",function(){
  window.open("https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm");
});

//prevent form submission of question 1 answer
$("#question-1-form").on("click",function(e){
  e.preventDefault();
});

//prevent form submission of question 2 answer
$("#question-2-form").on("click",function(e){
  e.preventDefault();
});

//prevent form submission guessing number for hint
$("#form-random-num").on("click",function(e){
  e.preventDefault();
});

//prevent form submission submitting code to next challenge
$("#code-form").on("click",function(e){
  e.preventDefault();
});


//constants
const c = {
  num : Math.floor((Math.random() * 19) + 1),
  count : 0,
  increment : function(){
    this.count++;
  },
  answers : {
    answerCarQueue : ["Black Car", "You", "Blue Car", "Red Truck", "Silver Car"],
    q1 : new RegExp("(linked(-| )\?lists\?)|(arrays\?)|(pointers\?)|(structures\?)","gi"),
    q2 : "peek"
  },
  code : Math.floor((Math.random() * 899) + 100),
  mID: {
    a: "#sortable-success-message",
    b: "#q-1-success-message",
    c: "#q-2-success-message"
  }
};

//make list sortable
$( function() {
  $( "#sortable" ).sortable({
    placeholder: "",
    stop: sortableListValidation
  });
  $( "#sortable" ).disableSelection();
});

//on stop event, check elements for correct order and provides code if successful
var sortableListValidation = function(event,ui){
  var ogCarListElems = $("#sortable").children();
  //alert(ogCarListElems);
  var currCarQueue = [];
  for (const element of ogCarListElems){
    currCarQueue.push(element.innerHTML);
  }
  if (ValidateQueue(currCarQueue)){
    SuccessMessageCode(c.mID.a,0);
  }
};

//creates a random success message for the queue completion
function SuccessMessageCode(id,pos){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4));
  $(id).text(success[i] + "The code is: " + c.code.toString()[pos]);
  $(id).removeClass("invisible");
}


//returns true if all elments in the queue are in the correct order
function ValidateQueue(elements){
  var correct = true;
  for (var i = 0; i < elements.length; i++){
    if (elements[i] != c.answers.answerCarQueue[i]){
      correct = false;
    }
  }
  return correct;
}

//validate question 1
$("#q-1-button").on("click",function(){
  var pop = $('#q-1-button').popover({content: "Try again", });
  if (ValidateQuestionOne()){
    pop.popover("dispose");
    SuccessMessageCode(c.mID.b,1);
  }
  else {
    pop.popover('show');
    $('#question-1-form').trigger('reset');
    }
});
//validation uses regex
function ValidateQuestionOne(){
  const check = $("#q-1-answer").val();
  return c.answers.q1.test(check);
}

//provides output based on validation of question 2
$("#q-2-button").on("click",function(){
  var pop = $('#q-2-button').popover({content: "Try again!",});
  if (ValidateQuestionTwo()){
    pop.popover("dispose");
    SuccessMessageCode(c.mID.c,2);
  }
  else{
    pop.popover("show");
    $('#question-2-form').trigger('reset');
  }
});

//validates question 2
function ValidateQuestionTwo(){
  if (c.answers.q2 == $("#q-2-answer").val().toLowerCase()){
    return true;
  }
  else {return false;}
}

//calls function to validate code input
$("#code-button").on("click",function(){
  ValidateCodeInput("#code-input");
});

//validates the full code assembled by answering all questions
function ValidateCodeInput(id){
  var a = parseInt($(id).val());
  if (c.code == a){
      Swal.fire({
        title:'Great work!',
        text:'You\'re getting the hang of it! Now let\'s make our way to Colorado to hit the slopes with Adeline!',
        icon:'success'
    }).then(function(){
      $(c.mID.a).addClass("invisible");
      $(c.mID.b).addClass("invisible");
      $(c.mID.c).addClass("invisible");
      window.location.href = '../breckenridge-story/binary-tree-breckenridge.html';
    });
  }
  else {
    var pop = $('#code-button').popover({content: "Try again!",});
    pop.popover("show");
    $('#code-form').trigger("reset");
  }
}


//button click calls checkRandom to validate user answer for hint
$("#random-number").on('click',function(){
  CheckRandomNum();
});

//checks input isdigit, is within range, and user has guesses left
//Once validation is accepted, input is compared.
function CheckRandomNum(){
  $("#random-number").popover("dispose");
  var pop;
  var correct = false;
  var regex = /[0-9 -()+]+$/;
  var numInputForRegex = $("#user-num-guess").val();
  //input validation
  if (c.count >=3){
    pop = $("#random-number").popover({content: "You have no more guesses left", trigger : "hover", delay : {"hide" : 0},});
    pop.popover("show");
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
      $("#challenge-hint").text("Hint: The second digit of the code is " + c.code.toString()[1]);
      $("#challenge-hint").removeClass("invisible");
    }
  }
  $("#form-random-num").trigger("reset");
};
