describe("Movie", function(){
    describe("select-movie", function() {
        it('will return Star Wars when asked for the movie name', function(){
            var testSelectMovie = Object.create(Movie);
            testSelectMovie.name = "star-wars";
            expect(testSelectMovie.select-movie()).to.equal("star-wars");
        });
    });
});
