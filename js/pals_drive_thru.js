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

//set properites of sortable draggable cubes
$(".cube-constraint").sortable({
  containment: ".cube-constraint",
  axis: "x",
  snap: true,
  opacity: 0.5,
  cursor: "grabbing",
  snapTolerance: 30
});
//make sure nothing shows in background when sortable is dragged
$( function() {
  $( "#sortable" ).sortable({
    placeholder: ""
  });
  $( "#sortable" ).disableSelection();
});

//constants
const c = {
  num : Math.floor((Math.random() * 20) + 1),
  count : 0,
  increment : function(){
    this.count++;
  }
};

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
    pop = $("#random-number").popover({content: "You have no more guesses left",});
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
      $("#form-random-num").trigger("reset");
    }
    else if (userNum > c.num){
      pop = $("#random-number").popover({content: userNum + " is higher than the random number",});
      pop.popover("show");
      $("#form-random-num").trigger("reset");
    }
    else{
      correct = true;
      pop = $("#random-number").popover({content: "Congratulations, you got it",});
      pop.popover("show");
      $("#form-random-num").trigger("reset");
      $("#challenge-hint").removeClass("invisible");
    }
  }
};
