describe('Scrabble', function() {

   var scrabble;

   beforeEach(function() {
     scrabble = new Scrabble();
   });

   describe('it will calculate and return our score', function() {
     it('calculates the score', function() {
       expect(scrabble.calculateScore('cafe')).toEqual(9)
     });
   });
});
