
let keystrokes = [];


document.addEventListener('keypress', function(event) {
    let key = event.key;
    keystrokes.push(key);

    
    document.getElementById('logArea').value = keystrokes.join('');

    
    saveKeystrokes();
});


function saveKeystrokes() {
   

    let blob = new Blob([keystrokes.join('')], { type: 'text/plain' });


    let link = document.createElement('a');

    link.href = URL.createObjectURL(blob);

    link.download = 'keystrokes.txt';

    
    link.click();
}
