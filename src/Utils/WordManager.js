import wordsData from '../data/dictionary.json';

const DIFFICULTY_LEVELS = {
   'EASY': 1,
   'MEDIUM': 1.5,
   'HARD': 2
}
const DATA_BY_LEVEL = {
   'EASY': wordsData.filter(word => word.length <= 4),
   'MEDIUM': wordsData.filter(word => word.length >= 5 && word.length <= 8),
   'HARD': wordsData.filter(word => word.length > 8)
}

class WordManager {  
   getWord(difficultyLevel) {
      let word = '';
      const data = DATA_BY_LEVEL[difficultyLevel];
      word = data[Math.floor(Math.random() * data.length)];
      return word;
   } 
}

export default WordManager 