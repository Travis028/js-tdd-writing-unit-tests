function pointsForWord(word) {
  if (!word) return 0;
  
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let totalPoints = 0;
  
  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      totalPoints += 1;
    } else {
      totalPoints += 2;
    }
  }
  
  return totalPoints;
}

module.exports = { pointsForWord };
