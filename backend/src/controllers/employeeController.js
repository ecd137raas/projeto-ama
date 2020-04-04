const connection = require('../database/connection');

module.exports = {

    async index(req, res){

    },
    async create(req, res){
        const {name, email, role, city, uf,therapist, active} = req.body;
        const [id] = await connection('employee').insert({
            name, email, role, city, uf,therapist, active
        });
        return res.json({id});
    }
}