const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {id} = req.body;
        const session = await connection('funcionarios').where('id', id).select('nome', 'especialidade').first();
        if(!session){
            return res.status(400).json({error: 'Nenhum usuário encontrado com essa identificação'});
        }
        return res.json(session);
    }
}