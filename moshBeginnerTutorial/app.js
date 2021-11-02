const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();


//template string
//ES6 /ES2015 : ECMAScript 6
console.log(`Total memory: ${totalMemory}`);
console.log(`Free memory: ${freeMemory}`);