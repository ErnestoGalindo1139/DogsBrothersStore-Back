import { config } from "dotenv";
config();

console.log('PUERTO', process.env.PORT);

export default {
    port: process.env.PORT || 4000
}

