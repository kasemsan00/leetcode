// https://leetcode.com/problems/find-and-replace-pattern/

 var findAndReplacePattern = function(words, pattern) {
    
    const getPattern = (word) => {
        let p = word[0];
        let counter = true;
        let output = [];
        for (let index = 0; index < word.length; index++) {
            let x = word[index];
            if(p !== x){
                p = x;
                counter = !counter;
            }
            output.push(counter)
        }
        return output
    }

    let patB = getPattern(pattern)
    let output = [];
    words.forEach(item => {
        let patA = getPattern(item)
        if(patA.toString() === patB.toString()){
            output.push(item)
        }
        console.log(patA, patB)
    })
    return output
};

findAndReplacePattern( ["abc","deq","mee","aqq","dkd","ccc"],  'abb')