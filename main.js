const dinos = require('./dinos.js')

const makeDino = function(name, era, eatsMeat, isExtinct = false) {
  const dinoObj = {
    species: name,
    period: era,
    carnivore: eatsMeat,
    extinct: isExtinct,
  }
  return dinoObj;
}

/********************
 * HELPER FUNCTIONS *
 ********************/


const makeSingular = function(dinoObj) {
  let newDino = makeDino(dinoObj.species, dinoObj.period, dinoObj.carnivore, dinoObj.extinct);
  if (dinoObj.species.slice(-2) === "us") {
    newDino.species = newDino.species.slice(0, -2);
    return newDino;
  }
  return newDino;
}

const truncateSpecies = function(dinoObj) {
  let newDino = makeDino(dinoObj.species, dinoObj.period, dinoObj.carnivore, dinoObj.extinct);
  if (dinoObj.species.length > 10) {
    newDino.species = newDino.species.slice(0, 7) + "...";
    return newDino;
  }
  return newDino;
}

const makeExtinct = function(dinoObj) {
  let newDino = makeDino(dinoObj.species, dinoObj.period, dinoObj.carnivore, true);
  return newDino;
}

const isCarnivore = function(dinoObj) {
  return dinoObj.carnivore;
}

const isExtinct = function(dinoObj) {
  return dinoObj.extinct;
}

const isTriassic = function(dinoObj) {
  if (dinoObj.period === "Triassic") {
    return true;
  } else {
    return false;
  }
}

const isJurassic = function(dinoObj) {
  if (dinoObj.period === "Jurassic") {
    return true;
  } else {
    return false;
  }
}

const isCretaceous = function(dinoObj) {
  if (dinoObj.period === "Cretaceous") {
    return true;
  } else {
    return false;
  }
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function(dinoObjs) {
  return dinoObjs.map(makeSingular);
}

const truncateDinos = function(dinoObjs) {
  return dinoObjs.map(truncateSpecies);
}

const makeAllExtinct = function(dinoObjs) {
  return dinoObjs.map(makeExtinct);
}

const carnivoresOnly = function(dinoObjs) {
  return dinoObjs.filter(isCarnivore);
}

const herbivoresOnly = function(dinoObjs) {
  return dinoObjs.filter(function(dinoObj) {
    return dinoObj.carnivore === false;
  });
}

const extinctOnly = function(dinoObjs) {
  return dinoObjs.filter(isExtinct);
}

const notExtinct = function(dinoObjs) {
  return dinoObjs.filter(function(dinoObj) {
    return dinoObj.extinct === false;
  });
}

const triassicOnly = function(dinoObjs) {
  return dinoObjs.filter(isTriassic);
}

const notTriassic = function(dinoObjs) {
  return dinoObjs.filter(function(dinoObj) {
    return dinoObj.period !== "Triassic";
  })
}


/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
