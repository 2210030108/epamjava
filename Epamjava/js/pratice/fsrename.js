const fs = require('fs');

fs.rename('example.txt', 'newfile.txt', (err) => {
    if (err) {
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed successfully!');
});

