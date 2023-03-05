function findEvenIndex(arr)
{
  let solution = -1;
  const reducer = (current, accumulator) => current + accumulator;
  for (let i = 0; i < arr.length; i++) {
    const start = arr.slice(0, i).reduce(reducer, 0);
    const end = arr.slice(i+1).reduce(reducer, 0);
    if(start === end) {
      return i;
    }
  }
  
  return solution;
}