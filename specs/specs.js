describe("Movie", function()
{
    describe("select_movie", function()
    {
        it('will return Star Wars when asked for the movie name', function()
        {
            var testSelectMovie = Object.create(Movie);
            testSelectMovie.name = "star-wars";
            expect(testSelectMovie.get_name()).to.equal("star-wars");
        });

        describe("get_age", function()
         {

        it('will return customer age when asked for the age', function()
        {
            var testCustomer = Object.create(Customer);
            testCustomer.age = 33;
            expect(testCustomer.get_age()).to.equal(33);
        });

        describe("get_price", function()
         {

            it('will return get price', function()
            {
                var testMovie1 = Object.create(Movie);
                expect(testMovie1.get_price()).to.equal(10);
            });
        });

        // describe("set_price", function()
        //  {
        //
        //     it('will return set price', function()
        //     {
        //         var testMovie1 = Object.create(Movie);
        //         expect(testMovie1.set_price(11)).to.equal(11);
        //     });
        // });




    });

});

});
