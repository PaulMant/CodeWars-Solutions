function nbYear(p0, percent, aug, p) {
    let numberOfYears = 0;
    let currentInhabitants = p0;
    while (currentInhabitants < p) {
      currentInhabitants += Math.trunc(currentInhabitants*percent/100) + aug;
      numberOfYears++;
    }
    return numberOfYears;
  }