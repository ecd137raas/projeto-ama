const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        //const {page = 1} = req.query;
        //const [count] = await connection('table').count();
        const employee = await connection('employee')
            .select([
                'id', 
                'name', 
                'role', 
                'active'
            ]);

        //res.header('X-Total-Count',count['count(*)'])
        return res.json(employee);
    },

    async create(req, res){
        const {name, email, role, city, uf,therapist, active} = req.body;
        const [id] = await connection('employee').insert({
            name, email, role, city, uf,therapist, active
        });
        return res.json({id});
    }
}