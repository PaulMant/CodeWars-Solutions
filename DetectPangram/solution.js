function isPangram(string){
    const AMOUNT_OF_LETTERS_IN_ALPHABET = 26;
    
    let cleanedString = [...string
                        .replace(/\s+/g, '')
                        .replace(/[\W\d]/g,'')
                        .toLowerCase()];
    
    return [... new Set(cleanedString)].length === AMOUNT_OF_LETTERS_IN_ALPHABET;
                        
  }