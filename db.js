const mongoose=require('mongoose');
require('dotenv').config();
const mongoUrl=process.env.MONGO_URI;
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to the database');
})
db.on('error', (err)=>{
    console.log('Error occured in databse ', err);
});
db.on('disconnected', ()=>{
    console.log('disconnected with the database');
})
module.exports=db;