//open queue challenge page on button click
$("#challenge-button").on("click",function(){
  window.location.href="queue_challenge.html";
});

//open resource page for queues on button click
$("#queue-resource-button").on("click",function(){
  window.open("https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm");
});

//set properites of sortable draggable cubes
$(".cube-constraint").sortable({
  containment: ".cube-constraint",
  axis: "x",
  snap: true,
  opacity: 0.5,
  cursor: "grabbing",
  snapTolerance: 30
});
//make sure nothing shows in background when sortable is dragged
$( function() {
  $( "#sortable" ).sortable({
    placeholder: ""
  });
  $( "#sortable" ).disableSelection();
} );
