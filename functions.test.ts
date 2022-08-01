const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4]

describe('shuffleArray should', () => {
    test('should return argument length match', ()=> {
       let results = shuffleArray(testArr) 
       expect(testArr.length).toEqual(results.length)
    })
    
    
})