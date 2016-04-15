var expect = require('chai').expect;
var pairs = require('./index.js');

describe('tests for converting object into array of key value pairs', function() {
  it('should get array of key value parirs', function() {
    expect(pairs({ one: 1, two: 2, three: 3 })).to.eql([['one', 1], ['two', 2], ['three', 3]]);

    expect(pairs({ America: 'Washington', India: 'Mumbai', Canada: 'Ottawa' }))
      .to.eql([['America', 'Washington'], ['India', 'Mumbai'], ['Canada', 'Ottawa']]);
  });

});
