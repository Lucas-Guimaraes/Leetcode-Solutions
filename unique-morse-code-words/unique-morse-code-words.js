var uniqueMorseRepresentations = function(words) {
    const code = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    return new Set(words.map(word => [...word].map(char => code[char.charCodeAt() - 97]).join(''))).size
};