import { fetchMonsterList, fetchByIndex, normalizeMonster } from "./monsters.js";

import {
  filterStrongMonsters,
  findDragon,
  hasLegendaryMonster,
  allValidMonsters,
  groupByType,
  bucketByCR
} from "./utils.js";

const N = 40;

async function main() {

  console.log("=== Taller 2 – Promesas y Manipulación de Datos ===\n");

  console.log("Obteniendo lista de monstruos...");

  const list = await fetchMonsterList();

  console.log("Total monstruos disponibles:", list.length);

  // Usar FILTER para obtener primeros N
  let count = 0;
  const firstN = list.filter(() => {
    if (count < N) {
      count++;
      return true;
    }
    return false;
  });

  console.log("Monstruos seleccionados:", firstN.length);

  console.log("\nObteniendo detalles...");

  const details = await Promise.all(
    firstN.map(monster => fetchByIndex(monster.index))
  );

  console.log("Detalles cargados:", details.length);

  console.log("\nNormalizando datos...");

  const monsters = details.map(normalizeMonster);

  console.log("Monstruos normalizados:", monsters.length);

  console.log("\nEjemplo de monstruo normalizado:");
  console.log(monsters[0]);

  // ============================
  // CONSULTAS
  // ============================
  console.log("\n=== FILTER ===");
  const strong = filterStrongMonsters(monsters);
  console.log("Monstruos fuertes:", strong.length);
  console.log(strong);

  console.log("\n=== FIND ===");
  const dragon = findDragon(monsters);
  console.log("Primer dragon encontrado:");
  console.log(dragon);

  console.log("\n=== SOME ===");
  const hasLegendary = hasLegendaryMonster(monsters);
  console.log("Existe monstruo legendario:", hasLegendary);

  console.log("\n=== EVERY ===");
  const allValid = allValidMonsters(monsters);
  console.log("Todos los monstruos son válidos:", allValid);

  console.log("\n=== REDUCE: GROUP BY TYPE ===");
  const byType = groupByType(monsters);
  console.log(byType);

  console.log("\n=== REDUCE: BUCKET BY CR ===");
  const buckets = bucketByCR(monsters);
  console.log(buckets);

  console.log("\n=== FIN DEL PROGRAMA ===");

}

main().catch(error => {
  console.error("Error en ejecución:", error.message);
});
