//import {checkRandomNum} from 'comic_con.js';

//open queue challenge page on button click
$("#challenge-button").on("click",function(){
  window.location.href="queue_challenge.html";
});

//open resource page for queues on button click
$("#queue-resource-button").on("click",function(){
  window.open("https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm");
});

$("#random-number").on("click",function(e){
  e.preventDefault();
});

$("#form-answer").on("click",function(e){
  e.preventDefault();
});

//constants
const c = {
  num : Math.floor((Math.random() * 20) + 1),
  count : 0,
  increment : function(){
    this.count++;
  },
  answerCarQueue : ["Black Car", "You", "Blue Car", "Red Truck", "Silver Car"],
  code: Math.floor((Math.random() * 899) + 100)
};

$( function() {
  $( "#sortable" ).sortable({
    placeholder: "",
    stop: sortableListValidation
  });
  $( "#sortable" ).disableSelection();
});

var sortableListValidation = function(event,ui){
  var ogCarListElems = $("#sortable").children();
  //alert(ogCarListElems);
  var currCarQueue = [];
  for (const element of ogCarListElems){
    currCarQueue.push(element.innerHTML);
  }
  if (validateQueue(currCarQueue)){
    successMessageCode("#success-message");
  }
};

function validateQueue(elements){
  var correct = true;
  for (var i = 0; i < elements.length; i++){
    if (elements[i] != c.answerCarQueue[i]){
      correct = false;
    }
  }
  return correct;
};

function successMessageCode(id){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4) + 1);
  $(id).text(success[i] + "The code is: " + c.code.toString()[0]);
  $(id).removeClass("invisible");
}


//upon clicking this button you submit your answer to be analyzed
//It will be check to make sure it is a digit and is within the range of guesses
//Once validation is accepted, input is compared.
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
      $("#form-random-num").trigger("reset");
    }
    else if (userNum > c.num){
      pop = $("#random-number").popover({content: userNum + " is higher than the random number",});
      pop.popover("show");
      $("#form-random-num").trigger("reset");
    }
    else{
      correct = true;
      pop = $("#random-number").popover({content: "Congratulations, you got it", trigger: "hover", delay: {"hide": 0},});
      pop.popover("show");
      $("#form-random-num").trigger("reset");
      $("#challenge-hint").removeClass("invisible");
    }
  }
};
