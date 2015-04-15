//set prototypes
//
var Movie = {
    name: "",
    time: "",
    date: "",
    get_name : function(){
    return this.name;
    }

};


var Customer = {
    age : "",
    get_age : function(){
    return this.age;
    }
}

// var movieStarWars = Object.create(Movie);
// var movieGladiator = Object.create(Movie);
// var movieForrestGump = Object.create(Movie);
// var movieSpartan = Object.create(Movie);
var moviePicked = Object.create(Movie);

var customer1 = Object.create(Customer);



//grab data

$(document).ready(function(){
    $("form#movies").submit(function(event){
        event.preventDefault();

    var name_input = $("select#movie-name").val();
    var time_input = $("select#movie-time").val();
    var date_input = $("#datepicker").val();
    var customer_age = $("input#age").val();

customer1.age = customer_age;
moviePicked.name = name_input;
moviePicked.time = time_input;
moviePicked.date = date_input;

alert(moviePicked.name);

    });

});
