
//button to open link to comic-con linked list story
$("#linked-list-comic-con").on('click',function(){
  window.location.href = "linked_list_comic_con.html";
});

//button to open linked list resource in new tab
$("#linked-list-resource-button").on('click',function(){
  window.open("https://www.geeksforgeeks.org/linked-list-set-1-introduction/","blank");
});

//button to open sock challenge link
$("#challenge-button").on('click',function(){
  window.location.href = "sock_challenge.html";
});

//button to open the drive thru story link
$("#next-page-button").on("click",function(){
  window.location.href = "queue_drive_thru.html";
});

//prevents answers to sock challenge from being submit and refreshing the page
$("#form-random-num").on("submit",function(e){
  e.preventDefault();
});

//prevents number guess from begin submit and refreshing the page
$("#form-answer").on("submit",function(e){
  e.preventDefault();
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
/* $("#random-number").on("click",function(){
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
}); */

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

//validates the answer for correctness, makes visible link to next challenge upon positive validation
$("#answer-button").on("click",function(){
  $("#answer-button").popover("dispose");
  var pop;
  var regexAnswer = /teeth/
  var answerInput = $("#answer-input").val().toLowerCase();
  if (regexAnswer.test(answerInput)){
    pop = $("#answer-button").popover({content: "That's correct, great job!",});
    pop.popover("show");
    $("#challenge-hint").addClass("invisible");
    $("#next-page-button").removeClass("invisible");
    $("#next-story-statement-1").removeClass("invisible");
  }
  else{
    pop = $("#answer-button").popover({content: "That's incorrect, try again",});
    pop.popover("show");
  }
  });

  //export{checkRandomNum};
