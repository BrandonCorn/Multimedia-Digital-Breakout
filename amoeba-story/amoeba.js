
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
    },
    accept: "#cube-1"
  })
});

$(function(){
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
    },
    accept: "#cube-2"
  })
});

$(function(){
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
    },
    accept: "#cube-3"
  })
});

$(function(){
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
    },
    accept: "#cube-4"
  })
});

$(function(){
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
    },
    accept: "#cube-5"
  })
});

$(function(){
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
    },
    accept: "#cube-6"
  })
});
