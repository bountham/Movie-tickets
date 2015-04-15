    //set prototypes
    var Movie =
    {
        name: "",
        time: "",
        date: "",
        price: 10,
        get_name : function()
        {
        return this.name;
        },

        get_price : function()

        {
            return this.price;
        },

        set_price: function()
        {
            if(this.time<10)
            {
                this.price = this.price -4;
            }
        }

    };


    var Customer = {
        age : "",
        get_age : function(){
        return this.age;
        }
    }


    var moviePicked = Object.create(Movie);

    var customer1 = Object.create(Customer);



    //grab data

    $(document).ready(function(){
        $("form#movies").submit(function(event){
            event.preventDefault();

        var name_input = $("select#movie-name").val();
        var time_input = parseInt($("select#movie-time").val());
        var date_input = $("#datepicker").val();
        var customer_age = $("input#age").val();

    customer1.age = customer_age;
    moviePicked.name = name_input;
    moviePicked.time = time_input;
    moviePicked.date = date_input;

    $("#price_result").append("<p>"+moviePicked.price+"</p>");

        });

    });
