
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

function NavCheck(inst){
  for(var i = 1; i < 5; i++){
    if (inst.get("reachstory"+i) == "true"){
      $("#nav-story-"+i).removeClass("disabled");
    }
  }
}

//button to open link to comic-con linked list story
$("#linked-list-comic-con").on('click',function(){
  //window.location.href = "comic-con-story/linked-list-comic-con.html";
  $('#videoMainPage')[0].play();
});


$("#videoMainPage").on("ended",function(){
  window.location.href = "comic-con-story/linked-list-comic-con.html";
});

$("#closeModalMainPage").on("click",function(){
  window.location.href = "comic-con-story/linked-list-comic-con.html";
})


$(".btn").on("click",function(){
  const chef = B();
  chef.set("cookie-consent","true");
  $(".cc-window").css("display","none");
})

$(function(){
  var audio = document.getElementById("game-audio");
  var tracks = ["game-track-1.mp3", "game-track-2.mp3", "game-track-3.mp3", "game-track-4.mp3", "game-track-5.mp3", "game-track-6.mp3", "game-track-7.mp3"]
  var i = Math.floor(Math.random() * tracks.length);
  var innerHtml = "<source src = '../music/" + tracks[i] + "'> </source>"
  $("#game-audio").html(innerHtml);
  audio.addEventListener("ended",function(){
    if (i < tracks.length){
      innerHtml = "<source src = '../music/" + tracks[i] + "'></source>";
      $("#game-audio").html(innerHtml);
      audio.load();
      audio.play();
      i++;
    }
    else{
      i = 0;
      innerHtml = "<source src = '../music/'" + tracks[i] + "></source>";
      $("#game-audio").html(innerHtml);
      audio.load();
      audio.play();
    }
  });
});

window.addEventListener('load',function(){
  const chef = B();
  NavCheck(chef);
  if (chef.get("cookie-consent") != "true"){
    $(".cc-window").css("display","");
  }
});
