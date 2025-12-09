const dotenv = require('dotenv');
dotenv.config();

function main() {
    console.log(`Welcome to the Git tutorial! this is a secret: ${process.env.SECRET}`);
}

main();