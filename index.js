const dotenv = require('dotenv');
dotenv.config();

function main() {
    console.log(`Welcome to the Git flow tutorial! this is a secret: ${process.env.SECRET}`);
    console.log(`C'est anas!`);
    console.log(`hi c est from roudayna: ${process.env.SECRET}`);
    console.log("login feature added");
    console.log(`fixing login error`);
}

main();