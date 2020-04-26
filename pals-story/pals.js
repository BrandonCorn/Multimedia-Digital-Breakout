window.addEventListener('load',function(){
  const chef = B();
  if(chef.get("reachstory2") == "false"){
    chef.set("reachstory2","true");
  }
});
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
const C =function(){
  return {
  answers : {
    answerCarQueue : ["Black Car", "You", "Blue Car", "Red Truck", "Silver Car"],
    q1 : new RegExp("(linked(-| )\?lists\?)|(arrays\?)|(pointers\?)|(structures\?)","gi"),
    q2 : "peek"
  },
  mID: {
    a: "#sortable-success-message",
    b: "#q-1-success-message",
    c: "#q-2-success-message"
  }
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
  var c = C();
  var ogCarListElems = $("#sortable").children();
  var currCarQueue = [];
  for (const element of ogCarListElems){
    currCarQueue.push(element.innerHTML);
  }
  if (ValidateQueue(c,currCarQueue)){
    SuccessMessageCode(c.mID.a,0);
  }
};

//creates a random success message for the queue completion
function SuccessMessageCode(id,pos){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4));
  const chef = parseInt(B().get("challenge2").split("")[pos]);
  $(id).text(success[i] + "The code is: " + chef);
  $(id).removeClass("invisible");
}


//returns true if all elments in the queue are in the correct order
function ValidateQueue(o,elements){
  var correct = true;
  for (var i = 0; i < elements.length; i++){
    if (elements[i] != o.answers.answerCarQueue[i]){
      correct = false;
      var chef = B().set("challenge2",(Math.floor(Math.random() * 899) + 100));
    }
  }
  return correct;
}

//validate question 1
$("#q-1-button").on("click",function(){
  var c = C();
  var pop = $('#q-1-button').popover({content: "Try again!", });
  if (ValidateQuestionOne(c)){
    pop.popover("dispose");
    SuccessMessageCode(c.mID.b,1);
  }
  else {
    pop.popover('show');
    $('#question-1-form').trigger('reset');
    }
});
//validation uses regex
function ValidateQuestionOne(o){
  const check = $("#q-1-answer").val();
  return o.answers.q1.test(check);
}

//provides output based on validation of question 2
$("#q-2-button").on("click",function(){
  var c = C();
  var pop = $('#q-2-button').popover({content: "Try again!",});
  if (ValidateQuestionTwo(c)){
    pop.popover("dispose");
    SuccessMessageCode(c.mID.c,2);
  }
  else{
    pop.popover("show");
    $('#question-2-form').trigger('reset');
  }
});

//validates question 2
function ValidateQuestionTwo(o){
  if (o.answers.q2 == $("#q-2-answer").val().toLowerCase()){
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
  var chef = B().get("challenge2");
  var a = $(id).val();
  if (chef == a){
      Swal.fire({
        title:'Great work!',
        text:'You\'re getting the hang of it! Now let\'s make our way to Colorado to hit the slopes with Adeline!',
        icon:'success'
    }).then(function(){
      window.location.href = '../breckenridge-story/binary-tree-breckenridge.html';
    });
  }
  else {
    var pop = $('#code-button').popover({content: "Try again!",});
    pop.popover("show");
    $('#code-form').trigger("reset");
  }
}
