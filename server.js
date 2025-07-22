const express=require('express');
const db=require('./db');
const Person=require('./personSchema');
const app=express();
const PORT=3000;
app.use(express.json());
app.post('/signup', async(req, res)=>{
    try{
        const data=req.body;
        const newPerson= new Person(data);
        const response= await  newPerson.save();
        console.log('Data Saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: 'Internal Server Error'});
    }
});
app.get('/signup', async (req, res)=>{
    try{
        const data= await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log('error occured');
        res.status(500).json({err:'Internal server error'});
    }
})
 app.listen(PORT, ()=>{
    console.log('Running at port 3000');
 });