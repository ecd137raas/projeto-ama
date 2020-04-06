const connection = require('../database/connection');

module.exports = {

    async index(req, res){

    },
    async create(req, res){
        const {name, birth, genre, degree, responsible, email, phone,city, uf, active} = req.body;

        const [id] = await connection('patients').insert({
            name, birth, genre, degree, responsible, email, phone,city, uf, active
        });
        return res.json({id});
    }
}