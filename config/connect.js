const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI)
.then(
    ()=>{
        console.log('conncted succesfully')
    }
)
.catch(
    (err)=>{
        console.log('erreur')
    }
)
module.exports = mongoose;