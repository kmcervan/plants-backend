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
    getUserPlantsBy
}

// ------------- Get Users ---------------
function get(){
    return db('users');
}

// ------------- Get by specified item ---------------
function getBy(filter){
    return db('users').where(filter).orderBy('userId');
}

// ------------- Add User ---------------
async function add(user){
    const [id] = await db('users').insert(user, 'userId');
    return getById(id);
}

// ------------- Get Userby Id ---------------
function getById(id){
    return db('users').where('userId', id).first();
}

// ------------- Update User ---------------
function update(id, changes){
    return db('users').where('userId', id).update(changes);
}

// PLANTS
// ------------- Get Plants ---------------
function getUserPlantsBy(userId){
    return db('plants').where('userId', userId).orderBy('plantId');
}

// function getUserPlantsBy(userId){
//     return db('user_plantId as up')
//     .join('plants as p', 'up.plantId', 'p.plantId')
//     .select('p.nickname', 'p.species', 'p.h2oFrequency', 'p.image', 'up.userId')
//     .where('up.userId', userId).orderBy('p.plantId');
// }

// ------------- Add Plants ---------------
async function addPlant(plant){
    const [id] = await db('plants').insert(plant, 'plantId');
    return getPlantById(id);
}

// ------------- Get Plants by Id ---------------
function getPlantById(id){
    return db('plants').where('plantId', id).first();
}

// ------------- Update Plants ---------------
function updatePlant(id, changes){
    return db('plants').where('plantId', id).update(changes);
}

// ------------- Delete Plants ---------------
function removePlant(id){
    return db('plants').where('plantId', id).del();
}