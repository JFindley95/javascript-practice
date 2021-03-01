describe('getMiddle', function() {
  it('will return the middle characters of a word', function() {
    expect(getMiddle('Jimmy')).toEqual('m');
    expect(getMiddle('goosey')).toEqual('os');
  });
});
