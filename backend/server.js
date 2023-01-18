const express =require('express');
const conn=require("./conn/database")
const postModel=require('./models/post.model')
const path = require('path');

const multer = require('multer');

const app=express();
const cors=require('cors')
// const bodyParser=require('body-parser')

conn();
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage ,limits: { fileSize: 1000000 }});

app.use('/uploads',express.static('uploads'))
app.use(cors());


app.get('/api/posts',async (req,res)=>{
    const posts=await postModel.find();
    res.json(posts);
})

app.delete('/api/posts/:id',async (req,res)=>{
    const posts=await postModel.findOneAndRemove({_id:req.params.id});
    res.json(posts);
})

app.post('/api/submit', upload.single('image'),async (req, res) => {
    const { author, location, description } = req.body;
    //console.log(req.file.path);
    // Handle the form data
    //console.log(req.body);

    var date = new Date();
    var dateOnly = date.toLocaleDateString();
   // console.log(dateOnly);

    await postModel.create({
        image : `https://instaclone-backend-5fzk.onrender.com/${req.file.path}`,
        author: author,
        location: location,
        desc: description,
        date: dateOnly
    });
    res.status(200).send({
        success: true
    });
});
app.listen(8000)