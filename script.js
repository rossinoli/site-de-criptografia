document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encodeButton = document.getElementById('encodeButton');
    const decodeButton = document.getElementById('decodeButton');
    const clearButton = document.getElementById('clearButton');
    const logo = document.getElementById('logo');

    const SHIFT = 3;

    function caesarCipher(str, shiftAmount, mode) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let charCode = str.charCodeAt(i);

            if (char >= 'a' && char <= 'z') { // Letras minúsculas
                if (mode === 'encode') {
                    charCode = ((charCode - 97 + shiftAmount) % 26) + 97;
                } else { // decode
                    charCode = ((charCode - 97 - shiftAmount + 26) % 26) + 97;
                }
                result += String.fromCharCode(charCode);
            } else if (char >= 'A' && char <= 'Z') { // Letras maiúsculas
                if (mode === 'encode') {
                    charCode = ((charCode - 65 + shiftAmount) % 26) + 65;
                } else { // decode
                    charCode = ((charCode - 65 - shiftAmount + 26) % 26) + 65;
                }
                result += String.fromCharCode(charCode);
            } else { 
                result += char;
            }
        }
        return result;
    }

    encodeButton.addEventListener('click', () => {
        const text = inputText.value;
        outputText.value = caesarCipher(text, SHIFT, 'encode');
    });

    decodeButton.addEventListener('click', () => {
        const text = inputText.value;
        outputText.value = caesarCipher(text, SHIFT, 'decode');
    });

    clearButton.addEventListener('click', () => {
        inputText.value = '';
        outputText.value = '';
        inputText.focus();
    });
});