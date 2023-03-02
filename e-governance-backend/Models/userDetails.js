const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: true
    },
    dobBS:{
        type: String,
        required: true
    },
    dobAD:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        required: false
    },
    education:{
        type: String,
        required: false
    },
    citizenshipNo:{
        type: String,
        required: true
    },
    citizenshipIssuedDistrict:{
        type: String,
        required: true
    },
    passportNo:{
        type: String,
        required: false
    },
    passportIssuedDistrict:{
        type: String,
        required: false
    },
    identityMark:{
        type: String,
        required: false
    },
    permanentzone:{
        type: String,
        required: true
    },
    permanentdistrict:{
        type: String,
        required: true
    },
    permanentvillage:{
        type: String,
        required: true
    },
    permanentward:{
        type: String,
        required: true
    },
    permanenttole:{
        type: String,
        required: true
    },
    permanentblockNo:{
        type: String,
        required: false
    },
    permanentmobileNo:{
        type: String,
        required: true
    },
    permanenttelNo:{
        type: String,
        required: false
    },
    permanentContact:{
        type: String,
        required: false
    },
    permanentemail:{
        type: String,
        required: false
    },
    presentZone:{
        type: String,
        required: true
    },
    presentDistrict:{
        type: String,
        required: true
    },
    presentVillage:{
        type: String,
        required: true
    },
    presentWard:{
        type: String,
        required: true
    },
    presentTole:{
        type: String,
        required: true
    },
    presentBlockNo:{
        type: String,
        required: false
    },
    presentMobileNo:{
        type: String,
        required: true
    },
    presentOfficeContactNo:{
        type: String,
        required: false
    },
    presentTelNo:{
        type: String,
        required: false
    },
    presentEmail:{
        type: String,
        required: false
    }
    
})

const User = mongoose.model('User', userSchema);

module.exports = User;

