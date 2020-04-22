$("#preorder-code-form").on("submit",function(e){
  e.preventDefault();
});

$("#traversal-resource-button").on("click",function(){
  window.open("https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm","blank");
});

$("#postorder-code-form").on("submit",function(e){
  e.preventDefault();
});

//convert code to preorder format
var Preorder = function(code){
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

//constants
const ob = function(){
  return {
    code: Math.floor((Math.random() * 899999) + 100000),
    preorder: function(){
      return Preorder(this.code);
    }
  }
};

//instance of constants
const c = new ob();

//validates that user provided code correctly in preorder format
function ValidatePreOrder(input){
  return input == c.preorder();
}

$("#preorder-code-button").on("click",function(){
  const id = "#preorder-success-message";
  if (ValidatePreOrder($("#preorder-code-input").val())){
    $(id).text("You got it, great job!!");
  }
  else{
    $(id).text("Try again!");
  }
  $(id).removeClass("invisible");
});

function SuccessMessageCode(id, pos = 0){
  const success = ["Great Job! ","You did it! ", "Perfect! ", "Nice Work! "];
  const i = Math.floor((Math.random() * 4));
  $(id).text(success[i] + "The code is: " + c.code.toString());
  $(id).removeClass("invisible");
}
