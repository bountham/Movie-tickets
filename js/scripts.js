//set prototypes
//
// var Movie = {
//     name: name_input,
//     time: time_input,
//     date: date_input,
//     // price: ?
//
//     }
//
//
// var Customer = {
//     age: age_input,
//     name: name_input
// }

//grab data

$(document).ready(function(){
    $("form#movies").submit(function(event){
        event.preventDefault();

var name_input = $("select#movie-name").val();

var time_input = $("select#movie-time").val();

var date_input = $("#datepicker").val();

var customer_age = $("#age").val();

    });

});
