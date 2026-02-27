
// filter - monstruos con cr >= 5 y hp >= 80
function filterStrongMonsters(monsters) {
  return monsters.filter(m => m.cr >= 5 && m.hp >= 80);
}

// find - primer monstruo que sea tipo "dragon" y cr >= 6
function findDragon(monsters) {
  return monsters.find(m => m.type === "dragon" && m.cr >= 6);
}

// some - existe algún monstruo con acciones legendarias?
function hasLegendaryMonster(monsters) {
  return monsters.some(m => m.hasLegendary === true);
}

// every - todos tienen stats completos y hp > 0?
function allValidMonsters(monsters) {
  return monsters.every(m =>
    Object.keys(m.stats).length === 6 && m.hp > 0
  );
}


// reduce
function groupByType(monsters) {
  const result = monsters.reduce((acc, m) => {

    if (!acc[m.type]) {
      acc[m.type] = {
        count: 0,
        totalCR: 0,
        maxHP: 0
      };
    }

    acc[m.type].count++;
    acc[m.type].totalCR += m.cr;
    acc[m.type].maxHP = Math.max(acc[m.type].maxHP, m.hp);

    return acc;

  }, {});

  // calcular promedio
  Object.keys(result).forEach(type => {
    result[type].avgCR = (result[type].totalCR / result[type].count).toFixed(1);
    delete result[type].totalCR;
  });

  return result;
}


//Reduce
function bucketByCR(monsters) {
  return monsters.reduce((acc, m) => {

    let bucket;

    if (m.cr <= 1) {
      bucket = "0-1";
    } else if (m.cr >= 2 && m.cr <= 4) {
      bucket = "2-4";
    } else if (m.cr >= 5 && m.cr <= 9) {
      bucket = "5-9";
    } else {
      bucket = "10+";
    }

    acc[bucket] = (acc[bucket] || 0) + 1;

    return acc;

  }, {});
}



//esto debe estar en el main de jose 
//filter
const strong = filterStrongMonsters(monsters);

//find
const dragon = findDragon(monsters);

//some
const hasLegendary = hasLegendaryMonster(monsters);

//every
const allValid = allValidMonsters(monsters);

// reduce
const byType = groupByType(monsters);

// reduce
const buckets = bucketByCR(monsters);
