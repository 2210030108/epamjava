const fs = require('fs');

fs.appendFile('example.txt', '\nAppended text!', (err) => {
    if (err) {
        console.error('Error appending file:', err);
        return;
    }
    console.log('Data appended successfully!');
});