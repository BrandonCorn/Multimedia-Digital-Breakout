
/**const A = function(){
  if (Cookies.get("begin") != "true"){
    Cookies.set("begin","true");
    Cookies.set("reachstory1","false");
    Cookies.set("reachstory2","false");
    Cookies.set("reachstory3","false");
    Cookies.set("reachstory4","false");
  }
}**/

const purpose = function(){
  var internalCookies = Cookies;
  return {
    get: function(name){
      return internalCookies.get(name);
    },
    set: function(name,value,attributes){
      internalCookies.set(name,value,attributes);
    },
    remove: function(name,attributes){
      internalCookies.remove(name,attributes);
    },
    getAll: function(){
      return internalCookies.get();
    }
  };
}

const factory = function(){
    return {
      get: function(name){
        return purpose().get(name);
      },
      set: function(name,value,attributes){
        purpose().set(name,value,attributes);
      },
      remove: function(name,attributes){
        purpose().remove(name,attributes);
      },
      getAll: function(){
        return purpose().getAll();
      }
    };
  //}
};


const B = function(){
  var c = factory();
  if (c.get("begin") != "true"){
    c.set("begin","true",{});
    c.set("reachstory1","false");
    c.set("reachstory2","false");
    c.set("reachstory3","false");
    c.set("reachstory4","false");
  }
  return c;
}

/**
function NavCheck(){
  for(var i = 1; i < 5; i++){
    if (Cookies.get("reachstory"+i) == "true"){
      $("#nav-story-"+i).removeClass("disabled");
    }
  }
} **/

function NavCheck2(inst){
  for(var i = 1; i < 5; i++){
    if (inst.get("reachstory"+i) == "true"){
      $("#nav-story-"+i).removeClass("disabled");
    }
  }
}

//button to open link to comic-con linked list story
$("#linked-list-comic-con").on('click',function(){
  window.location.href = "comic-con-story/linked-list-comic-con.html";
});


window.addEventListener('load',function(){
  //A();
  //NavCheck();
  const chef = B();
  NavCheck2(chef);
});
