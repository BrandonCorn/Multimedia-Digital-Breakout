
const A = function(){
  if (Cookies.get("begin") != "true"){
    Cookies.set("begin","true");
    Cookies.set("reachstory1","false");
    Cookies.set("reachstory2","false");
    Cookies.set("reachstory3","false");
    Cookies.set("reachstory4","false");
  }
}

function NavCheck(){
  for(var i = 1; i < 5; i++){
    if (Cookies.get("reachstory"+i) == "true"){
      $("#nav-story-"+i).removeClass("disabled");
    }
  }
}

//button to open link to comic-con linked list story
$("#linked-list-comic-con").on('click',function(){
  window.location.href = "comic-con-story/linked-list-comic-con.html";
});

/**window.onload = function(){
  A();
  NavCheck();
}; **/

window.addEventListener('load',function(){
  A();
  NavCheck();
});
