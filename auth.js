const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./personSchema');
passport.use(new LocalStrategy(async(username, password, done)=>{
    try{
        const user= await Person.findOne({username:username});
        if(!user){
            return done(null, false, {message: 'Invalid Username'});
        }
        const isPasswordMatch= await user.comparePassword(password);
        if(isPasswordMatch){
            return done(null, user);
        }
        else{
            return done(null, false, {message:'Invalid Password'});
        }
    }
    catch(err){
        return done(err);
    }
}))
module.exports=passport;