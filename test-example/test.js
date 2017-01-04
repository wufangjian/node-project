var assert = require('assert');

// describe('String#split', function () {
//     it('should return an array', function () {
//         assert(Array.isArray(('a,b,c').split(',')));
//     });
//
//     it('should retrun the same arry', function () {
//         assert.equal(['a', 'b', 'c'].length, 'a,b,c'.split(',').length, 'arrays have equal length');
//         for (var i = 0; i < ['a', 'b', 'c'].length; i++) {
//             assert.equal(['a', 'b', 'c'][i], 'a,b,c'.split(',')[i], i + 'element is equal');
//         }
//     })
// });

var expected;
var current;

before(function () {
    expected = ['a', 'b', 'c'];
})

describe('String#split', function () {
    beforeEach(function () {
        current = 'a,b,c'.split(',');
    })

    it('should return an array', function () {
        assert(Array.isArray(current));
    })

    it('should return the same array', function () {
        assert.equal(expected.length, current.length, 'arryas have equal length');

        for(var i = 0; i < expected.length; i++){
            assert(expected[i], current[i], i + 'element is equal');
        }
    })
})