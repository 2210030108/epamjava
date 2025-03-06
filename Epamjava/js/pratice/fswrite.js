const fs = require('fs');

fs.writeFile('examplewrite.txt', 'Hello, Node.js!, This is added Content.', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});
