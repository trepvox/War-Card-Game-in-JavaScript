var expect = chai.expect;


describe('MyFunctions', function() {

    describe('#Name check', function() {
        it("Is looking for the name of the first player and tests them to match with what's in the code", function(){
            let player1 = new Player('Sand'); //expect Sand
            expect(player1.name).to.be.a('string');
        });
    });
});