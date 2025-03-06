//const os = require('os');
import { type, version, freemem, cpus } from 'os';

console.log(type())
console.log(version())
console.log(freemem())
console.log(cpus())