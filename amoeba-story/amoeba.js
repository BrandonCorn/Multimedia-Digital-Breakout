$("#merge-sort-resource-button").on("click",function(){
  window.open("https://www.thecodingdelight.com/merge-sort-algorithm-tutorial/","blank");
});

$("#challenge-button").on("click",function(){
  window.location.href = "merge-sort-challenge.html";
});

$("#question-1-form").on("submit",function(e){
  e.preventDefault();
});

$("#question-2-form").on("submit",function(e){
  e.preventDefault();
});

$("#question-3-form").on("submit",function(e){
  e.preventDefault();
});

//validates question 1
function ValidateQuestionOne(input){
  const chef = B();
  const regEx = new RegExp("(?=.*base)(?=.*case)","gi");
  if (regEx.test(input)){
    chef.set("challenge-4-question-1","true");
    return true;
  }
  else{
    return false;
  }
}

//calls for validation of question 1
$("#q-1-button").on("click",function(){
  const answer = $("#q-1-answer").val();
  let pop = $("#q-1-button").popover({content: "Try again!",})
  if (ValidateQuestionOne(answer)){
    pop.popover("dispose");
    pop.popover({content: "You did it!",});
    pop.popover("show");
    CheckAllQuestions();
  }
  else{
    pop.popover("show");
    $("#question-1-form").trigger("reset");
  }
});

//validates question 2
function ValidateQuestionTwo(input){
  const chef = B();
  const regEx = new RegExp("((n(-| )\?log(-| )\?n))","gi");
  if (regEx.test(input)){
    chef.set("challenge-4-question-2","true");
    return true;
  }
  else{
    return false;
  }
}

//calls for validation of question 2
$("#q-2-button").on("click",function(){
  const answer = $("#q-2-answer").val();
  let pop = $("#q-2-button").popover({content: "Try again!",})
  if (ValidateQuestionTwo(answer)){
    pop.popover("dispose");
    pop.popover({content: "You did it!",});
    pop.popover("show");
    CheckAllQuestions();
  }
  else{
    pop.popover("show");
    $("#question-2-form").trigger("reset");
  }
});

//validates question 3
function ValidateQuestionThree(input){
  const chef = B();
  const regEx = new RegExp("(recurs)","gi");
  if (regEx.test(input)){
    chef.set("challenge-4-question-3","true");
    return true;
  }
  else{
    return false;
  }
}

//calls for validation of question 3
$("#q-3-button").on("click",function(){
  const answer = $("#q-3-answer").val();
  let pop = $("#q-3-button").popover({content: "Try again!",})
  if (ValidateQuestionThree(answer)){
    pop.popover("dispose");
    pop.popover({content: "You did it!",});
    pop.popover("show");
    CheckAllQuestions();
  }
  else{
    pop.popover("show");
    $("#question-3-form").trigger("reset");
  }
});

//creates a code of given size with no repeated numbers, shuffles, and returns them
function Code(size,num){
  var arr = [];
  for (var i = 1; i <= size; i++){
    //arr.push(i);
    if (i > 3){
      arr.push(i+2);
    }
    else{ arr.push(i); }
  }
  Shuffle(arr);

  return arr.join("");
}

//shuffles elements of an array without repeating them
function Shuffle(arr){
  var i = arr.length;
  var j, temp;
  while(--i > 0){
    j = (Math.floor(Math.random() * i-1) + 1);
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}


//positions order of round one
function RoundOnePositions(){
  const chef = B();
  var cook = "";
  const val = chef.get("challenge-4");
  if (parseInt(val[0]) < parseInt(val[1])){
    cook += "123";
  }
  else {
    cook+= "213";
  }
  if (parseInt(val[3]) < parseInt(val[4])){
    cook += "456"
  }
  else{
    cook += "546";
  }

  return cook;
}

//round 1 elements sorted
function SortRoundOne(){
  const chef = B();
  var val = chef.get("challenge-4");
  var nV = "";
  if (parseInt(val[0]) < parseInt(val[1])){
    nV += val[0] + val[1] + val[2];
  }
  else {
    nV += val[1] + val[0] + val[2];
  }
  if (parseInt(val[3]) < parseInt(val[4])){
    nV += val[3] + val[4] + val[5];
  }
  else{
    nV += val[4] + val[3] + val[5];
  }

  return nV;
}


//round 2 elements sorted as well as their positions
function SortRoundTwo(x,y,z){
  const chef = B();
  var val = chef.get("round-1-code");
  var pos = chef.get("sort-position-round-1");
  var l = [val[x], val[y]];
  var r = [val[z]];
  var lPos = [pos[x], pos[y]];
  var rPos = [pos[z]];
  var sortArr = [];
  var posArr = [];
  var a = 0, b = 0;
//  while (l.length != 0 && r.length != 0){
  while(a < l.length && b < r.length){
    if (parseInt(l[a]) < parseInt(r[b])){
      sortArr.push(l[a]);
      posArr.push(lPos[a]);
      a++;
    }
    else{
      sortArr.push(r[b]);
      posArr.push(rPos[b]);
      b++
    }
  }

  while(a < l.length){
    sortArr.push(l[a]);
    posArr.push(lPos[a]);
      a++;
  }

  while(b < r.length){
    sortArr.push(r[b]);
    posArr.push(rPos[b]);
    b++;
  }
  var final = [sortArr.join(""), posArr.join("")];

  return final;
}

//get cube positions for final sorting
function FinalRound(){
  const chef = B();
  var val = chef.get("round-2-code");
  var pos = chef.get("sort-position-round-2");
  var l = [val[0], val[1], val[2]];
  var r = [val[3],val[4],val[5]];
  var lPos = [pos[0], pos[1], pos[2]];
  var rPos = [pos[3],pos[4],pos[5]];
  var sortArr = [];
  var posArr = [];
  var a = 0, b = 0;
  //while (l.length != 0 && r.length != 0){
  while(a < l.length && b < r.length){
    if (parseInt(l[a]) < parseInt(r[b])){
      sortArr.push(l[a]);
      posArr.push(lPos[a]);
      a++;
    }
    else{
      sortArr.push(r[b]);
      posArr.push(rPos[b]);
      b++;
    }
  }

  //while (l.length != 0){
  while(a < l.length){
    sortArr.push(l[a]);
    posArr.push(lPos[a]);
    a++;
  }
//  while (r.length != 0){
  while(b < r.length){
    sortArr.push(r[b]);
    posArr.push(rPos[b]);
    b++;
  }

  return posArr.join("");
}

//set values to be used for challenge completion
function PreHeat(){
  const chef = B();
  chef.set("challenge-4",Code(6));
  chef.set("round-1-code",SortRoundOne());
  chef.set("sort-position-round-1",RoundOnePositions());
  chef.set("round-2-code",SortRoundTwo(0,1,2)[0] + SortRoundTwo(3,4,5)[0]);
  chef.set("sort-position-round-2",SortRoundTwo(0,1,2)[1] + SortRoundTwo(3,4,5)[1]);
  chef.set("final-sort-position",FinalRound());

  chef.set("challenge-4-sort","false");
  chef.set("challenge-4-question-1","false");
  chef.set("challenge-4-question-2","false");
  chef.set("challenge-4-question-3","false");
}

//set the text of each cube to corresponding code value
function SetNums(){
  const chef = B();
  const val = chef.get("challenge-4");
  $("#val-1").text(val[0]);
  $("#val-2").text(val[1]);
  $("#val-3").text(val[2]);
  $("#val-4").text(val[3]);
  $("#val-5").text(val[4]);
  $("#val-6").text(val[5]);
}

//checks completion of all challenges
function CheckAllQuestions(){
  const chef = B();
  const a = chef.get("challenge-4-sort");
  const b = chef.get("challenge-4-question-1");
  const c = chef.get("challenge-4-question-2");
  const d = chef.get("challenge-4-question-3");
  if (a == "true" && b == "true" && c == "true" && d == "true"){
    Swal.fire({
      title: 'Amazing!!',
      text:"You've completed all the challenges and picked up all your friends! Time to carry on the expedition with all your friends! Have a great trip!",
      icon:'success',
    }).then((result) => {
      $("#myModal").modal("show");
      $("#video")[0].play();
    });
  }
}

//after animation plays page goes to next story
$("#video").on("ended",function(){
  window.location.href = "../index.html";
});

//click continue button while animation playing to skip to next story
$("#closeModal").on("click",function(){
  window.location.href = "../index.html";
});

window.addEventListener('load',function(){
  const chef = B();
  if(chef.get("reachstory4") == "false"){
    chef.set("reachstory4","true");
  }
  SetNums();
  PreHeat();
});


//allows draggable to be dropped on blocks up to each one being in an individual block
$(function(){
  $( "#cube-1" ).draggable({
    containment:"#sorting-div",
    snap: true,
    opacity: 0.5,
    cursor: "grabbing",
    snapTolerance: 5,
    revert : "invalid",
    helper: "clone"
  });
  $('.droppable-1').droppable({

    drop: function(event, ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
      $(this).droppable("disable");
    },
    accept: "#cube-1"
  });

  $( "#cube-2" ).draggable({
    containment:"#sorting-div",
    snap: true,
    opacity: 0.5,
    cursor: "grabbing",
    snapTolerance: 5,
    revert : "invalid",
    helper: "clone"
  });
  $('.droppable-2').droppable({

    drop: function(event, ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
      $(this).droppable("disable");
    },
    accept: "#cube-2"
  });

  $( "#cube-3" ).draggable({
    containment:"#sorting-div",
    //snap: true,
    opacity: 0.5,
    cursor: "grabbing",
    snapTolerance: 5,
    revert : "invalid",
    helper: "clone"
  });
  $('.droppable-3').droppable({

    drop: function(event, ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
      $(this).droppable("disable");
    },
    accept: "#cube-3"
  });

  $( "#cube-4" ).draggable({
    containment:"#sorting-div",
    //snap: true,
    opacity: 0.5,
    cursor: "grabbing",
    snapTolerance: 5,
    revert : "invalid",
    helper: "clone"
  });
  $('.droppable-4').droppable({

    drop: function(event, ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
      $(this).droppable("disable");
    },
    accept: "#cube-4"
  });

  $( "#cube-5" ).draggable({
    containment:"#sorting-div",
    //snap: true,
    opacity: 0.5,
    cursor: "grabbing",
    snapTolerance: 5,
    revert : "invalid",
    helper: "clone"
  });
  $('.droppable-5').droppable({

    drop: function(event, ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
      $(this).droppable("disable");
    },
    accept: "#cube-5"
  });

  $( "#cube-6" ).draggable({
    containment:"#sorting-div",
    //snap: true,
    opacity: 0.5,
    cursor: "grabbing",
    snapTolerance: 5,
    revert : "invalid",
    helper: "clone"
  });
  $('.droppable-6').droppable({

    drop: function(event, ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
      $(this).droppable("disable");
    },
    accept: "#cube-6"
  });
});

//allows first round of sorting blocks to be placed properly
$(function(){
  $("#sort-round-one-1").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-1")[0]
  });
  $("#sort-round-one-2").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-1")[1]
  });
  $("#sort-round-one-3").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-1")[2]
  });
  $("#sort-round-one-4").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-1")[3]
  });
  $("#sort-round-one-5").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-1")[4]
  });
  $("#sort-round-one-6").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-1")[5]
  })
});

//allows second round of sorting blocks to be placed properly
$(function(){
  $("#sort-round-two-1").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-2")[0]
  });
  $("#sort-round-two-2").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-2")[1]
  });
  $("#sort-round-two-3").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-2")[2]
  });
  $("#sort-round-two-4").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-2")[3]
  });
  $("#sort-round-two-5").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-2")[4]
  });
  $("#sort-round-two-6").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-"+ B().get("sort-position-round-2")[5]
  })
});


//sorted elements
$(function(){
  const chef = B();
  $("#final-round-1").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-" + chef.get("final-sort-position")[0]
  });
  $("#final-round-2").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-" + chef.get("final-sort-position")[1]
  });
  $("#final-round-3").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-" + chef.get("final-sort-position")[2]
  });
  $("#final-round-4").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-" + chef.get("final-sort-position")[3]
  });
  $("#final-round-5").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-" + chef.get("final-sort-position")[4]
  });
  $("#final-round-6").droppable({
    drop: function(event,ui){
      var droppable = $(this);
      var draggable = ui.draggable;
      droppable.addClass("complete");
      const chef = B();
      chef.set("challenge-4-sort","true");
      CheckAllQuestions();
      $(this).droppable("disable");
      draggable.clone().appendTo(droppable).draggable({containment: "#drag-constraint",opacity: 0.5,cursor:"grabbing",snapTolerance:30,revert: "invalid",helper:"clone"});
      $(this).find("p");
    },
    accept: "#cube-" + chef.get("final-sort-position")[5]
  })
});
