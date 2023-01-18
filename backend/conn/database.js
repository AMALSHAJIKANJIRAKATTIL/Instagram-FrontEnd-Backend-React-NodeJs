const mongoose=require('mongoose');


async function getconnection(){
    mongoose.set('strictQuery', true);
    await (await (await mongoose.connect('mongodb+srv://amalshaji:amal2001@cluster0.fguegcf.mongodb.net/instaclone?retryWrites=true&w=majority')));
}

module.exports = getconnection;


