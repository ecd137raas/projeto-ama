const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {name, email, specialty, city, uf,therapist, active} = req.body;
        const [id] = await connection('employee').insert({
            name, email, specialty, city, uf,therapist, active
        });
        return res.json({id});
    }
}