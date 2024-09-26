
const crud = require('../models/crud.model');
const Validate = require('../validation/crud.validation')

// add user 

const Add = async (req, res) => {
    const { errors, isValid } = Validate(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            const exist = await crud.findOne({ Email: req.body.Email });
            if (exist) {
                errors.Email = "User already exists";
                res.status(404).json(errors);
            } else {
                await crud.create(req.body);
                res.status(201).json({ message: "User added successfully" });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Server error" });
    }
}


//__________________________________________________________________________________________
//____________________________________________________________________________________________

/*try {

   if(!isValid){
   res.status(404).json(errors)
   }else{
    const newUser = new crud(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User added successfully' });
   }
   } catch (error) {
    console.log(error.message);
    
}*/





// find all user

const Findall = async(req,res)=>{

    try {
 
        const data = await crud.find(req.body)
        
        res.status(201).json( data);
    
        } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Failed to add user', error: error.message });
    }
}

// find just one user with his id

const Findsingle = async(req,res)=>{

    try {
 
        const data = await crud.findOneAndUpdate(
            {_id: req.params.id},//search the old  data
            req.body, //make the new data in body
            {new : true} // update is true
        )
        
        res.status(201).json( data);
    
        } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Failed to add user', error: error.message });
    }
}


// you must put the id to make update

const Update = async(req,res)=>{
    
    const { errors, isValid } = Validate(req.body);

    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
        const data = await crud.findOne({_id:req.params.id})
        
        res.status(201).json( data);
        }
        } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Failed to add user', error: error.message });
    }
}


// you should make the id to delete somone

const Delete = async(req,res)=>{
    try {
 
         await crud.deleteOne({_id:req.params.id})   //deleteone = findOneAndRemove
        
        res.status(201).json({message:'user deleted'});
    
        } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Failed to add user', error: error.message });
    }
}



module.exports={

   Add,
   Findall,
   Findsingle,
   Update,
   Delete


}




