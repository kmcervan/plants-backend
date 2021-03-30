const router = require('express').Router();

const User = require('./users-model');
// const Plant = require('../plants/plants-model');
// const restricted = require('../auth/restricted-middleware');

// -------------- Middleware ---------------
async function checkId(req, res, next){
    const { id } = req.params;
    const idExists = await Plants.getPlantById(id)
    if(idExists){
        next()
    }else{
        res.status(500).json('This plant does not exist')
    }
}

function checkPayLoad(req, res, next){
    const { nickname, species, h2oFrequency } = req.body;
    if(nickname && species && h2oFrequency){
        next()
    }else{
        res.status(400).json('Missing nickname, species and/or water Frequency')
    }
}

// -------------- Update User Info ------------- 

router.put('/:id', (req, res) => {
    const changes = req.body;
    const { userId } = req.params;

    User.update(userId, changes)
        .then(user => {
            if(user){
                res.status(200).json(changes);
            }else{
                res.status(404).json({error: 'please provide correct information'});
            }
        })
        .catch(error => { 
            res.status(500).json({message: 'There was an error updating your information', error: error.message});
        });
})

// ------------ Get User Plants --------------
router.get('/:id/plants', checkId, async (req, res) => {
    try{
        const plantId = req.params.userId
        const plants = await User.getUserPlantsBy(plantId)
        res.status(200).json(plants)
    }catch(error){
        res.status(500).send(error);
    }
})

// -------------- Add User Plant ----------------
router.post('/:id/plants', checkPayLoad, async (req, res, next) => {
    try {
        const plant = req.body;
        const data = await User.addPlant(plant)
        res.status(201).json(data)
    }catch(error){
        next(error)
    }
})

// ------------ Update User Plants --------------
router.put('/:id/plants/:id', checkPayLoad, checkId, async (req, res, next) => {
    try {
        const id = req.params.userId
        const changes = req.body
        const data = await User.updatePlant(id, changes)
        res.status(201).json(data)
    }catch(error){
        next(error)
    }
})

// ------------ Delete User Plants --------------
router.delete('/:id/plants/:id', checkId, async (req, res, next) => {
    try {
        const id = req.params.userId
        const data = await User.updatePlant(id)
        res.status(200).json(data)
    }catch(error){
        next(error)
    }
})

module.exports = router;