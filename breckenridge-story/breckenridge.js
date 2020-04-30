window.addEventListener('load',function(){
  const chef = B();
  if(chef.get("reachstory3") == "false"){
    chef.set("reachstory3","true");
  }
});

$("#binary-tree-resource-button").on("click",function(){
  window.open("https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html","blank");
});

$("#challenge-button").on("click",function(){
  window.location.href = "binary-tree-challenge.html";
});

$("#preorder-code-form").on("submit",function(e){
  e.preventDefault();
});


//convert code to preorder format
function Preorder(code){
  const arr = code.split("");
  let newArr = [];
  newArr = PreorderHelper(arr,0,newArr);
  return newArr.join("");
}

//helper function for recursively setting code to preorder
function PreorderHelper(a,b,c){
  if(b < a.length){
    c.push(a[b]);
    c = PreorderHelper(a, (b*2)+1,c);
    c = PreorderHelper(a, (b*2)+2,c);
  }
  return c;
}

//validates that user provided code correctly in preorder format
function ValidatePreOrder(input){
  const chef = Preorder(B().get('challenge-3-code'));
  return input == chef;
}

//creates a code of given size with no repeated numbers, shuffles, and returns them
function Code(size){
  var arr = [];
  for (var i = 1; i <= size; i++){
    arr.push(i);
  }
  Shuffle(arr);
  //return parseInt(arr.join(""));
  return arr.join("");
}

//shuffles elements of an array without repeating them
function Shuffle(arr){
  let i = arr.length;
  var j, temp;
  while(--i > 0){
    j = (Math.floor(Math.random() * i-1) + 1);
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}



$("#preorder-code-button").on("click",function(){
  $("#preorder-code-button").popover("dispose");
  const id = "#preorder-success-message";
  const input = $("#preorder-code-input").val();
  var pop;
  if(ValidatePreOrder(input)){
    Swal.fire({
      title:'Awesome',
      text: 'Let\'s head out to meet up with Lily at Amoeba Record Store in San Franciso!',
      icon: 'success'
    }).then(function(){
      window.location.href = "../amoeba-story/merge-sort-amoeba-records";
    });
  }
  else{
    pop = $('#preorder-code-button').popover({content: "Try again!!",})
    pop.popover('show');
    $("#preorder-code-form").trigger("reset");
  }
  ValidatePreOrder($("#preorder-code-input").val());
});

function Set(){
  const chef = B();
  chef.set("challenge-3-code",Code(6));
}

function Success(){
  Set();
}
function SuccessMessageCode(id, pos = 0){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4));
  //added this line for cookie
  var chef = B().get("challenge3");
  $(id).text(success[i] + "The code is: " + chef);
  $(id).removeClass("invisible");
}
