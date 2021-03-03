describe('splitRna', function() {
     it('will split the rna input in to three equal chunks to show codons', function() {
       expect(splitRna('AUGUUUUUC')).toEqual(['AUG','UUU','UUC']);
     });
   });
