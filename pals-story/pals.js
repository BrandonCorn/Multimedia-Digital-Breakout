window.addEventListener('load',function(){
  const chef = B();
  if(chef.get("reachstory2") == "false"){
    chef.set("reachstory2","true");
  }
  SetSuccessValues();
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

//prevent form submission of question 2 answer
$("#question-3-form").on("click",function(e){
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
    mID: {
      a: "#sortable-success-message",
      b: "#q-1-success-message",
      c: "#q-2-success-message"
    }
  }
};

//initializes questions answers to false
function SetSuccessValues(){
  const chef = B();
  chef.set("challenge-2-queue-complete","false");
  chef.set("challenge-2-question-1","false");
  chef.set("challenge-2-question-2","false");
  chef.set("challenge-2-question-3","false");
}

function CheckAllQuestions(){
  const chef = B();
  const a = chef.get("challenge-2-queue-complete");
  const b = chef.get("challenge-2-question-1");
  const c = chef.get("challenge-2-question-2");
  const d = chef.get("challenge-2-question-3");
  if (a == "true" && b == "true" && c == "true" && d == "true"){
    Swal.fire({
      title:'Great work!',
      text:'You\'re getting the hang of it! Now let\'s make our way to Colorado to hit the slopes with Adeline!',
      icon:'success'
    }).then(function(){
      window.location.href = '../breckenridge-story/binary-tree-breckenridge.html';
    });
  }
}

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
  const c = C();
  const ogCarListElems = $("#sortable").children();
  let currCarQueue = [];
  for (const element of ogCarListElems){
    currCarQueue.push(element.innerHTML);
  }
  if (ValidateQueue(currCarQueue)){
    SuccessMessageCode(c.mID.a,0);
    CheckAllQuestions();
  }
};

//creates a random success message for the queue completion
function SuccessMessageCode(id,pos){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4));
  const chef = parseInt(B().get("challenge2").split("")[pos]);
  $(id).text(success[i]); //+ "The code is: " + chef);
  $(id).removeClass("invisible");
}


//returns true if all elments in the queue are in the correct order
function ValidateQueue(elements){
  const chef = B();
  const answer = ["Black Car", "You", "Blue Car", "Red Truck", "Silver Car"];
  let correct = true;
  for (var i = 0; i < elements.length; i++){
    //if (elements[i] != o.answers.answerCarQueue[i]){
    if (elements[i] != answer[i]){
      correct = false;
      chef.set("challenge-2-queue-complete","true");
    }
  }
  return correct;
}

//validation uses regex
function ValidateQuestionOne(input){
  const chef = B();
  const regEx = new RegExp("(linked(-| )\?lists\?)|(arrays\?)|(pointers\?)|(structures\?)","gi");
  //const answer = $("#q-1-answer").val();
  if (regEx.test(input)){
    chef.set("challenge-2-question-1","true");
    return true;
  }
  else{
    return false;
  }
}

//button calls for validation of question 1
$("#q-1-button").on("click",function(){
  let pop = $('#q-1-button').popover({content: "Try again!", });
  const answer = $("#q-1-answer").val();
  if (ValidateQuestionOne(answer)){
    pop.popover("dispose");
    pop.popover({content: "Awesome!",});
    pop.popover("show");
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
  const regEx = new RegExp("(peek)","gi");
  //var answer = $("#q-2-answer").val();
  if (regEx.test(input)){
    chef.set("challenge-2-question-2","true");
    return true;
  }
  else{
    return false;
  }
}

//button calls for validaton of question 2
$("#q-2-button").on("click",function(){
  let pop = $('#q-2-button').popover({content: "Try again!",});
  const answer = $("#q-2-answer").val();
  console.log(answer);
  if (ValidateQuestionTwo(answer)){
    pop.popover("dispose");
    pop.popover({content: "You got it!",});
    pop.popover("show");
    CheckAllQuestions();
  }
  else{
    pop.popover("show");
    $('#question-2-form').trigger('reset');
  }
});

//validates question 3
function ValidateQuestionThree(input){
  const chef = B();
  const regEx = new RegExp("(?=.*single)(?=.*lane)(?=.*road)|(?=.*one)(?=.*way)(?=.*road)","gi");
  //const answer = $("#q-3-answer").val();
  if (regEx.test(input)){
    chef.set("challenge-2-question-3","true");
    return true;
  }
  else{
    return false;
  }
}

//button calls for validaton of question 3
$("#q-3-button").on("click",function(){
  let pop = $('#q-3-button').popover({content: "Try again!",});
  const answer = $("#q-3-answer").val();
  if (ValidateQuestionThree(answer)){
    pop.popover("dispose");
    //SuccessMessageCode(c.mID.c,2);
    pop.popover({content: "You got it!",});
    pop.popover("show");
    CheckAllQuestions(); 
  }
  else{
    pop.popover("show");
    $('#question-3-form').trigger('reset');
  }
});


/**
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
} **/
