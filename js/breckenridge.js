$("#preorder-code-form").on("submit",function(e){
  e.preventDefault();
});

$("#traversal-resource-button").on("click",function(){
  window.open("https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm","blank");
});

$("#postorder-code-form").on("submit",function(e){
  e.preventDefault();
});

var Preorder = function(code){
  var arr = code.toString().split("");
  var newArr = [];
  newArr = PreorderHelper(arr,0,newArr);
  return parseInt(newArr.join(""));
}

function PreorderHelper(a,b,c){
  if(b < a.length){
    c.push(a[b]);
    c = PreorderHelper(a, (b*2)+1,c);
    c = PreorderHelper(a, (b*2)+2,c);
  }
  return c;
}

const ob = function(){
  return {
    code: Math.floor((Math.random() * 899999) + 100000),
    preorder: function(){
      return Preorder(this.code);
    }
  }
};

const c = new ob();

function ValidatePreOrder(input){
  return input == c.preorder();
}

$("#preorder-code-button").on("click",function(){
  console.log(ValidatePreOrder($("#preorder-code-input").val()));
}); 
