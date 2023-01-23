const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let interArray = [];
    let decLetter = [];
    let result = [];

    for (let i = 0; i < expr.length; i++ ){
        interArray.push(expr[i]);

        while(interArray.length === 10){
            decLetter.push(interArray.splice(0,10).join(''));
        } 
    }

    for (let letter of decLetter){
        if (letter === '**********'){
            letter = ' ';
        }
        letter = letter.replace(/^0+/, '');
        letter = letter.replace(/10/g, '.');
        letter = letter.replace(/11/g, '-');
        
        for(let key in MORSE_TABLE){
            
            if (letter === key){
                result.push(MORSE_TABLE[key]);
            };

            if (letter === ' ') {
                result.push(' ');
                break;
            }
        }
    }
    return result.join('');
}

module.exports = {
    decode
}