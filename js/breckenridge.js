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
  var temp = [arr[0]];
  var n = 0;
  while(temp.length > 0 && n < 10){
    var a = temp.pop();
    newArr.push(a);
    console.log("arr: " + arr);
    console.log("a: " + a);
    var b = arr.indexOf(a);
    console.log("b:" + b);

    if (((b*2) + 2) < arr.length){
      temp.push(arr[(b*2)+2]);
      console.log("madeit2");
    }
    if (((b*2)+1) < arr.length){
      temp.push(arr[(b*2)+1])
      console.log("madeit1");
    }
    console.log("newArr: " + newArr);
    console.log("temp: " + temp);
    console.log(temp.length);
    n++;
  }
  return parseInt(newArr.join());
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
  console.log(input + " " + c.preorder());
  return input == c.preorder;
}

$("#preorder-code-button").on("click",function(){
  console.log(ValidatePreOrder($("#preorder-code-input").val()));
})
