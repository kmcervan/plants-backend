const db = require('../../data/db-config');

module.exports = {
    removePlant,
    updatePlant,
    getPlantById,
    addPlant,
    getUserPlantsBy
}

function getUserPlantsBy(userId){
    return db('plants').where('userId', userId).orderBy('plantId');
}

async function addPlant(plant){
    const [id] = await db('plants').insert(plant, 'plantId');
    return getPlantById(id);
}

function getPlantById(id){
    return db('plants').where('plantId', id).first();
}

function updatePlant(id, changes){
    return db('plants').where('plantId', id).update(changes);
}

function removePlant(id){
    return db('plants').where('plantId', id).del();
}