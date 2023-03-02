const bodyParser = require('body-parser');
const express = require('express')
// const mongoose = require('mongoose');
const connectDB = require('./Models/dbConnection');
const User = require('./Models/userDetails')

const app = express();
app.use(express.json())
app.use(bodyParser.json())

//database connection
connectDB();

app.post('/api/userDetails',(req, resp)=>{
    const { firstName,middleName, lastName, dobBS, dobAD, age, bloodGroup, gender, occupation, education, citizenshipNo, citizenshipIssuedDistrict, passportNo, passportIssuedDistrict, identityMark, permanentzone, permanentdistrict, permanentvillage, permanentward, permanenttole, permanentblockNo, permanentmobileNo, permanenttelNo, permanentContact, permanentemail, presentZone, presentDistrict, presentVillage, presentWard, presentTole, presentBlockNo, presentMobileNo, presentOfficeContactNo, presentTelNo, presentEmail} = req.body;
    const user = new User({
        firstName,
        middleName,
        lastName,
        dobBS, dobAD, age, bloodGroup, gender, occupation, education, citizenshipNo, citizenshipIssuedDistrict, passportNo, passportIssuedDistrict, identityMark, permanentzone, permanentdistrict, permanentvillage, permanentward, permanenttole, permanentblockNo, permanentmobileNo, permanenttelNo, permanentContact, permanentemail, presentZone, presentDistrict, presentVillage, presentWard, presentTole, presentBlockNo, presentMobileNo, presentOfficeContactNo, presentTelNo, presentEmail
        
    })
    user.save()
    .then((data)=>{
        resp.send(data)
    })
    .catch((err)=>{
        resp.send(err)
    })

})



app.listen(8000,()=>{
    console.log("server started at port 8000");
})
