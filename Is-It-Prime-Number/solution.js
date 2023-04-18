function isPrime(num) {
    if(num <= 2) return num === 2;
    
    const maxDivisor = Math.sqrt(num) + 1;
    
    for (let i = 2; i < maxDivisor; i++) {
      if (num % i === 0) return false;
    }
    
    return true;
  }
  