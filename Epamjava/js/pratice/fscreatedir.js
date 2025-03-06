const fs = require('fs');

fs.mkdir('myFolder', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
        return;
    }
    console.log('Directory created successfully!');
});
