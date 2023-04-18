// complete the function
function solution(string) {
    const sentenceUpperCaseArray = [...string.toUpperCase()];
    let result = [...string];
    for (let i = result.length -1; i >= 0; i--) {
      if (result[i] === sentenceUpperCaseArray[i]){
        result.splice(i, 0, ' ');
      }
      
    }
    
    return result.join('');  
  }
  