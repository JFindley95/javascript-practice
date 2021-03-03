var condonConversion = {
'AUG' : 'Methionine' }
// 'UUU, UUC' : 'Phenylalanine',
// 'UUA, UUG' : 'Leucine',
// 'UCU, UCC, UCA, UCG' : 'Serine',
// 'UAU, UAC' : 'Tyrosine',
// 'UGU, UGC' : 'Cysteine',
// 'UGG' : 'Tryptophan',
// 'UAA, UAG, UGA' : 'STOP' }

function splitRna(rna) {

  var codons = [];

  for (var i = 0, charsLength = rna.length; i < charsLength; i += 3) {
      codons.push(rna.substring(i, i + 3));
        // return chunks;
  }
  return codons;
  }


  // for(i = 0; i < condons.length; ++i) {
  //   var key = condons[i];
  //   var protein = condonConversion[key];
  // }
  // return protein;
