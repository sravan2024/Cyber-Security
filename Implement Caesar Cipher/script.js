function caesarCipher(str, shift) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);

            
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

function encrypt() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    let encrypted = caesarCipher(message, shift);
    document.getElementById('output').innerText = encrypted;
}

function decrypt() {
    let message = document.getElementById('message').value;
    let shift = parseInt(document.getElementById('shift').value);
    let decrypted = caesarCipher(message, -shift);
    document.getElementById('output').innerText = decrypted;
}
