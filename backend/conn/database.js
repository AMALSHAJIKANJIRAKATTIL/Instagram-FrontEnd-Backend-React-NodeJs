const mongoose=require('mongoose');


async function getconnection(){
    mongoose.set('strictQuery', true);
    await (await (await mongoose.connect('mongodb://localhost/instaclone')));
}

module.exports = getconnection;


