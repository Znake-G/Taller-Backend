// ============================
// MANIPULACIÓN CON MAP, FILTER, REDUCE
// ============================

export function filterStrongMonsters(monsters) {
  return monsters.filter(m => m.cr >= 5 && m.hp >= 80);
}

export function findDragon(monsters) {
  return monsters.find(m => m.type === "dragon" && m.cr >= 6);
}

export function hasLegendaryMonster(monsters) {
  return monsters.some(m => m.hasLegendary === true);
}

export function allValidMonsters(monsters) {
  return monsters.every(m =>
    Object.keys(m.stats).length === 6 && m.hp > 0
  );
}

export function groupByType(monsters) {
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

  Object.keys(result).forEach(type => {
    result[type].avgCR =
      Number((result[type].totalCR / result[type].count).toFixed(1));
    delete result[type].totalCR;
  });

  return result;
}

export function bucketByCR(monsters) {
  return monsters.reduce((acc, m) => {
    let bucket;
    if (m.cr <= 1) bucket = "0-1";
    else if (m.cr <= 4) bucket = "2-4";
    else if (m.cr <= 9) bucket = "5-9";
    else bucket = "10+";

    acc[bucket] = (acc[bucket] || 0) + 1;
    return acc;
  }, {});
}
