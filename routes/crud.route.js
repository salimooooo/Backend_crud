const express = require('express');
const { Add, Findall, Findsingle, Update, Delete } = require('../controllers/crud.controller');
const router = express.Router()




router.post('/crud', Add)


router.get('/crud',Findall )


router.get('/crud/:id', Findsingle)


router.put('/crud/:id',Update )


router.delete('/crud/:id',Delete )









module.exports=router;