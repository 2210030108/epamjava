const EventEmitter = require('events'); // Import EventEmitter class
const myEmitter = new EventEmitter();   // Create an instance

// Define an event listener for 'greet' event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice'); 