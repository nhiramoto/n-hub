const remote = require('electron').remote;
const main = remote.require('./main.js');

console.log('index.js: ' + __dirname);
let button = document.createElement('button');
button.textContent = 'Configurações';
button.addEventListener('click', () => {
    main.openConfigWindow();
}, false);
document.body.appendChild(button);
