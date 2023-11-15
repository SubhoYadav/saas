// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err.message));

async function main() {
  await mongoose.connect('mongodb+srv://cluster0.yr9tcnx.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority');
}