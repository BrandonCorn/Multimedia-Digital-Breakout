
const ob = function(){
  return {
    code: Math.floor((Math.random() * 899999) + 100000)
  };
}

const c = new ob();

$("#postorder-code-button").on("submit",function(e){
  e.preventDefault();
});
