const connection = require('../database/connection');

module.exports = {
    async create(req, res){
        const {email} = req.body;
        const session = await connection('funcionarios').where('email', email).select('id', 'nome', 'especialidade').first();
        if(!session){
            return res.status(400).json({error: 'Nenhum usuário encontrado com essa identificação'});
        }
        return res.json(session);
    }
}