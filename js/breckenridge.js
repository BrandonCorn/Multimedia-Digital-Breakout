$("#preorder-code-form").on("submit",function(e){
  e.preventDefault();
});

$("#postorder-code-form").on("submit",function(e){
  e.preventDefault();
});

//convert code to preorder format
function Preorder(code){
  var arr = code.toString().split("");
  var newArr = [];
  newArr = PreorderHelper(arr,0,newArr);
  return parseInt(newArr.join(""));
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
  return input == c.preorder();
}

//creates a code of given size with no repeated numbers, shuffles, and returns them
function Code(size){
  var arr = [];
  for (var i = 1; i <= size; i++){
    arr.push(i);
  }
  Shuffle(arr);
  return parseInt(arr.join(""));
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


//constants
const ob = function(){
  return {
    code: Code(6),
    preorder: function(){
      return Preorder(this.code);
    }
  }
};

//instance of constants
const c = new ob();


$("#preorder-code-button").on("click",function(){
  const id = "#preorder-success-message";
  var pop;
  if (ValidatePreOrder($("#preorder-code-input").val())){
    pop = $('#preorder-code-button').popover({content: "You got it, great work!!",});
    pop.show('show');
  }
  else{
    pop = $('#preorder-code-button').popover({content: "Try again!!",})
    pop.popover('show');
    $("#preorder-code-form").trigger("reset");
  }
  //$(id).removeClass("invisible");
});

function SuccessMessageCode(id, pos = 0){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4));
  $(id).text(success[i] + "The code is: " + c.code.toString());
  $(id).removeClass("invisible");
}
