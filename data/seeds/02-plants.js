
exports.seed = function(knex) {
    return knex('plants').insert([
      {nickname: 'plant1', 
      species: 'spec1', 
      h2oFrequency: 'once/day', 
      image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 
      
    },
      {nickname: 'plant2', 
      species: 'spec2', 
      h2oFrequency: 'once/day', 
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80', 
      
    },
      {nickname: 'plant3', 
      species: 'spec3', 
      h2oFrequency: 'once/day', 
      image: 'https://images.unsplash.com/photo-1458596376782-d1c25e7da40e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1341&q=80', 
      }
    ]);
   
};
