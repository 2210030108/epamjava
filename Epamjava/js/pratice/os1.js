import os from 'os';


console.log("OS Type:", os.type());
console.log("OS Version:", os.version());
console.log("Free Memory:", os.freemem());
console.log("CPU Model:", os.cpus()[0].model); // Print only the first CPU core's model
console.log("Total Cores:", os.cpus().length); // Print the number of logical cores

