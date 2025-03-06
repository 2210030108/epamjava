const path = require('path');

const filePath = 'Java/Java EPAM Course/NodeJs/Programs/path.js';

console.log('File Name:', path.basename(filePath));

console.log('Directory Name:', path.dirname(filePath));

console.log('File Extension:', path.extname(filePath));

console.log('Parsed Path:', path.parse(filePath));