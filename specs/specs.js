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






    });

});

});
