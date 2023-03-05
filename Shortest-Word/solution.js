function findShort(s){
    let shortest;
    s.split(' ').forEach(word => {
      if(!shortest || word.length < shortest) {
        shortest = word.length
      }
    })
    return shortest;
  }