function launchDices(): number[] {
    return Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1);
}


function isYams(dices: number[]): boolean {
    return dices.every((value) => value === dices[0]);
}

function isCarre(dices: number[]): boolean {
  const counts = new Map<number, number>();
  for (const de of dices) {
      counts.set(de, (counts.get(de) || 0) + 1);
  }
  return Array.from(counts.values()).includes(4);
}

function isDouble(dices: number[]): boolean {
  const counts = new Map<number, number>();
  for (const de of dices) {
      counts.set(de, (counts.get(de) || 0) + 1);
  }
  const occurrences = Array.from(counts.values());
  return occurrences.includes(2) && occurrences.filter(count => count === 2).length === 2;
}

function bestCombination(dices: number[]): number {
    if (isYams(dices)) return 3;
    if (isCarre(dices)) return 2;
    if (isDouble(dices)) return 1;
    return 0;
}

export { launchDices, bestCombination };