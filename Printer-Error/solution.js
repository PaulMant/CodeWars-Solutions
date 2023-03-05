function printerError(s) {
    let errors = 0;
    const LIMIT_LETTER = 'm';
    [...s].forEach(letter => {
      if (letter > LIMIT_LETTER){
        errors++;
      }
    })
  return errors + '/' + s.length;
}