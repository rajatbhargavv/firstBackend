import { basicObj } from "./second.js";
import os from "os";

console.log("OS platform:", os.platform());
console.log("CPU architecture:", os.arch());
console.log("Free memory:", os.freemem());
console.log("Home directory:", os.homedir());
console.log("Your sysem is up since:", os.uptime());
