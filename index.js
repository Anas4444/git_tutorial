const dotenv = require('dotenv');
dotenv.config();

function main() {
    console.log(`Welcome to the Git flow tutorial! this is a secret: ${process.env.SECRET}`);
}

main();