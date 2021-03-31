const db = require('../../data/db-config');

module.exports = {
    get,
    getBy,
    getById,
    add,
    update,
    removePlant,
    updatePlant,
    getPlantById,
    addPlant,
    getUserPlantsBy,
    getAllPlants
}

// ------------- Get Users ---------------
function get(){
    return db('users');
}

// ------------- Get by specified item ---------------
function getBy(filter){
    return db('users').where(filter).select('*').orderBy('id');
}

// ------------- Add User ---------------
async function add(user){
    const [id] = await db('users').insert(user, 'id');
    return getById(id);
}

// ------------- Get Userby Id ---------------
function getById(id){
    return db('users').where('id', id).select('*').first();
}

// ------------- Update User ---------------
function update(id, changes){
    return db('users').where('id', id).update(changes);
}

// PLANTS
// ------------- Get Plants ---------------
function getUserPlantsBy(userId){
    return db('plants').where('id', userId).select('*');
}

function getAllPlants(){
    return db('plants')
}

// function getUserPlantsBy(userId){
//     return db('user_plantId as up')
//     .join('plants as p', 'up.plantId', 'p.plantId')
//     .select('p.nickname', 'p.species', 'p.h2oFrequency', 'p.image', 'up.userId')
//     .where('up.userId', userId).orderBy('p.plantId');
// }

// ------------- Add Plants ---------------
async function addPlant(plant){
    const [id] = await db('plants').insert(plant, 'id');
    return getPlantById(id);
}

// ------------- Get Plants by Id ---------------
function getPlantById(id){
    return db('plants').where('id', id).select('*').first();
}

// ------------- Update Plants ---------------
function updatePlant(id, changes){
    return db('plants').where('id', id).update(changes);
}

// ------------- Delete Plants ---------------
function removePlant(id){
    return db('plants').where('id', id).del();
}