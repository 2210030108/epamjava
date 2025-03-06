function greet(name, callback) {
    console.log("Function greet() is called");
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("John", sayBye);
