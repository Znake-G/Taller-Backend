
const API = "https://www.dnd5eapi.co";
const LIST_URL = `${API}/api/2014/monsters`;
const N = 40;

// fetch de datos

async function fetchMonsterList() {
  const res = await fetch(LIST_URL);
  if (!res.ok) throw new Error("No pude cargar la lista");
  const data = await res.json();
  return data.results;
}

async function fetchByUrl(urlPath) {
  const res = await fetch(`${API}${urlPath}`);
  if (!res.ok) throw new Error("No pude cargar detalle: " + urlPath);
  return res.json();
}

// normalización de datos
function normalizeAC(armor_class) {

  if (Array.isArray(armor_class)) {
    const values = armor_class.map(a => a.value ?? 0);
    return Math.max(...values, 0);
  }

  return armor_class ?? 0;
}

function normalizeSpeed(speedObj) {

  const values = Object.values(speedObj || {});

  const numbers = values.map(v => {
    const n = parseInt(String(v));
    return Number.isNaN(n) ? 0 : n;
  });

  if (numbers.length === 0) return 0;

  return Math.max(...numbers);
}


function normalizeMonster(m) {

  return {

    index: m.index,
    name: m.name,
    size: m.size,
    type: m.type,
    alignment: m.alignment,

    cr: m.challenge_rating ?? 0,

    ac: normalizeAC(m.armor_class),

    hp: m.hit_points ?? 0,

    speed: normalizeSpeed(m.speed),

    stats: {
      str: m.strength,
      dex: m.dexterity,
      con: m.constitution,
      int: m.intelligence,
      wis: m.wisdom,
      cha: m.charisma
    },

    immuneCount: (m.damage_immunities ?? []).length,
    resistCount: (m.damage_resistances ?? []).length,
    vulnCount: (m.damage_vulnerabilities ?? []).length,
    hasLegendary: (m.legendary_actions ?? []).length > 0

  };
}


// Main
async function main() {

  console.log("=== Result ===");

  // trae la lista 
  const list = await fetchMonsterList();
  console.log("Total monstruos:", list.length);

  const firstN = list.slice(0, N);
  console.log("Tomados:", firstN.length);

  const details = await Promise.all(
    firstN.map(m => fetchByUrl(m.url))
  );

  console.log("Detalles cargados:", details.length);

  // normalizar con map()

  const monsters = details.map(normalizeMonster);
  console.log("Normalizados:", monsters.length);

  console.log("\nEjemplo normalizado:\n");
  console.log(monsters[0]);

}

main().catch(console.error);