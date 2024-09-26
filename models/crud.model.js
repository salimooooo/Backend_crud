const mongoose = require('mongoose');
const Schema = mongoose.Schema; // validate and specify the type of data 



const UserShema = new Schema({

    Email:String,
    Lastname:String,
    Firstname:String,
    Password:String,
    Birthday:String,
    Location:String
},{timestamps:true})//is a configuration option that make a time when user do any operation(crud)


module.exports = mongoose.model( 'crud' , UserShema);