// Check that jQuery is loaded
$( document ).ready( function() {
    // console.log('jquery is loading');
});

// Add to JSON Object on Form Submit
$( "form" ).submit(function( event ) {

    //did the form submit?
    // console.log("form submitted")

    //set variables for values
    var characterWithInitiative = $( this ).serializeArray();
    var charName = characterWithInitiative[0].value;
    var initiativeRoll = characterWithInitiative[1].value;

    // console.log(charName);
    // console.log(initiativeRoll);
    if(charName == null || charName == '' ||
       initiativeRoll == null || initiativeRoll == '') {
        alert("You need to fill in all fields!");
        return false;
    };

    var listElement = "<li class='ui-state-default list-group-item'>"+
            "<span class='ui-icon ui-icon-arrowthick-2-n-s'></span>"+
            "<span id='charName'>"+charName+"</span>"+
            "<span id='initiative'>"+initiativeRoll+"</span>"+
            "<button class='delete btn-danger'> X </button></li>";

    $("#sortable").append(listElement);
    event.preventDefault();
});


$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

$("#sortable").on('click', '.delete', function(even){
    $( this ).parent().slideUp();
});
