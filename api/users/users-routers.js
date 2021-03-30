const router = require('express').Router();
const User = require('./users-model');
// const Plant = require('../plants/plants-model');
// const restricted = require('../auth/restricted-middleware');

// -------------- Middleware ---------------
async function checkUser(req, res, next){
    const id = req.params.userId;
    const userExists = await User.getById(id)
    if(userExists){
        next()
    }else{
        res.status(500).json('This User does not exist or you have no plants')
    }
}

// -------------- Update User Info ------------- 

router.put('/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    User.update(id, changes)
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
router.get('/:id/plants', (req, res) => {
    
    const plantId = req.params.id
    User.getUserPlantsBy(plantId)
    .then(plants => {
        if(plants.length === 0 || NaN || null){
            res.json('you currently have no plants saved, try adding a new plant!')
        }else{
            res.status(200).json(plants)
        }
    })
    .catch(error => {
        res.status(500).send(error);
    })
})

module.exports = router;