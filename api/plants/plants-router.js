const router = require('express').Router();
const Plants = require('./plants-model');

// async function checkId(req, res, next){
//     const { id } = req.params;
//     const idExists = await Plants.getPlantById(id)
//     if(idExists){
//         next()
//     }else{
//         res.status(500).json('This plant does not exist')
//     }
// }

// function checkPayLoad(req, res, next){
//     const { nickname, species, h2oFrequency } = req.body;
//     if(nickname && species && h2oFrequency){
//         next()
//     }else{
//         res.status(400).json('Missing nickname, species and/or water Frequency')
//     }
// }

