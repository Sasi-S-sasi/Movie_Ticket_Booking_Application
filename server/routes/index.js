const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');


const moviedetails = require('../models/movieDetails');
const userdetails = require('../models/userDetails');
const logindetails = require('../models/login');

//Insertion
router.post('/api/moviedetails/add', (req,res) =>{
    let details = new moviedetails({
        name : req.body.name,
        price : req.body.price
    })
    
    
    details.save((err,data) =>{
        res.status(200).json({code:200, message : 'Movie Details added Successfully',
        addmoviedetails : data})
    });
});


router.post('/api/userdetails/add', (req,res) =>{
    const details = new userdetails({
        name : req.body.name,
        mobile : req.body.mobile,
        seatNo : req.body.seatNo,
        screen : req.body.screen
    });
    
    
    details.save((err,data) =>{
        res.status(200).json({code:200, message : 'User Details added Successfully',
        adduserdetails : data});
    });
});



//get


router.get('/api/MovieDetails', (req, res) => {
    moviedetails.find({}, (err, data) => {
        if(!err){
            res.json(data);
        }
        else{
            console.log(err);
        }
    });
});

//login
router.post('/api/login', (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    logindetails.findOne({email : email})
    .then(user =>{
        if(user){
            console.log('user found')
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({error:err})
                }
                if(result){
                    res.json({message : 'Login successfull '+user.email})
                }
                else{
                    res.json('Invalid email or password')
                }
            })
        }
        else{
            res.json('user not found')
        }
    });
});


//signUp
router.post('/api/signup', async(req, res)=>{
    try {
        const saltPassword = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, saltPassword);
        
        let details = new logindetails({
            email : req.body.email,
            password : securedPassword
        })
        details.save((err,data) =>{
            res.status(200).json({code:200, message : 'Login Details added Successfully',
            addlogindetails : data});
        });
        
    } catch(err){
        res.json({message : err});
    }  
});




// //closedSeats
// router.get('/api/SeatDetails/closedSeats', (req, res) => {
//     seatdetails.find({"state" : "closed"}, (err, data) => {
//         if(!err){
//             res.json(data);
//         }
//         else{
//             console.log(err);
//         }
//     });
// });


// //Reset
// router.delete('/api/reset', (req,res) =>{
//     bookingdetails.deleteMany({}, (err, data) =>{
//         if(err){
//             res.json({message:err});
//         }
//         else{
//             seatdetails.updateMany({}, {$set:{ state : "open"}},{new:true}, (error,data) =>{
//                 if(error){
//                     res.json({message:error});
//                 }
//                 else{
//                     res.json({message:"Reset successfull"});
//                 }
//             });
//         }
//     });
// });


module.exports = router;

