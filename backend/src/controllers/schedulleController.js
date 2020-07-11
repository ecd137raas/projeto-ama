const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const schedulle = await connection('schedulle')
            .select('*');
        return res.json(schedulle);
    },
    async create(req, res){
        const {id_employee, id_patients, day_schedulle, hr_schedulle, date, active} = req.body;
        const [id] = await connection('schedulle').insert({
            id_employee, id_patients, day_schedulle, hr_schedulle, date, active
        });
        return res.json({id});
    }
}