const mongoose=require('mongoose');


const Schema = mongoose.Schema;

const post=new Schema({
    image : {type:String,require : true} ,
    author : {type:String,require : true} ,
    location : {type:String,require : true},
    desc : {type:String,require : true},
    date: String
},{timestamps: true})

const postModel=mongoose.model('posts',post);

module.exports= postModel;