$(".cube-constraint").sortable({
  containment: ".cube-constraint",
  axis: "x",
  snap: true,
  opacity: 0.5,
  cursor: "grabbing",
  snapTolerance: 30
});

$( function() {
  $( "#sortable" ).sortable({
    placeholder: ""
  });
  $( "#sortable" ).disableSelection();
} );

alert($(".cube-constraint").find("p").innerHTML())
