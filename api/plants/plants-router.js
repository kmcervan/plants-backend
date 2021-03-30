const router = require('express').Router();
const Plants = require('../users/users-model');

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

async function checkUser(req, res, next){
    const id = req.params.userId;
    const userExists = await Plants.getById(id)
    if(userExists){
        next()
    }else{
        res.status(500).json('This User does not exist or you have no plants')
    }
}

// ******************************* PLANTS **************************************

// // ------------ Get User Plants --------------
// router.get('/', checkUser, async (req, res) => {
//     try{
//         const plantId = req.params.userId
//         const plants = await Plants.getUserPlantsBy(plantId)
//         res.status(200).json(plants)
//     }catch(error){
//         res.status(500).send(error);
//     }
// })

router.get('/', (req, res) => {
    Plants.getAllPlants()
    .then(plants => {
        res.status(200).json(plants)
    })
    .catch(error => {error.message });
})

// -------------- Add User Plant ----------------
router.post('/', checkPayLoad, async (req, res, next) => {
    try {
        const plant = req.body;
        const data = await Plants.addPlant(plant)
        res.status(201).json(data)
    }catch(error){
        next(error)
    }
})

// ------------ Update User Plants --------------
router.put('/:id', checkPayLoad, checkId, (req, res) => {

    const id = req.params.id
    const changes = req.body
    Plants.updatePlant(id, changes)
    .then(plant => {
        res.status(201).json(changes)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

// ------------ Delete User Plants --------------
router.delete('/:id', checkId, async (req, res) => {
    const body = await req.body;
    const id = req.params.id;
    Plants.removePlant(id)
    .then(plant => {
        res.status(200).json('this has been terminated')
    })
    .catch(error => {
        res.status(500).json('termination failed :( ')
    })
})

module.exports = router;
