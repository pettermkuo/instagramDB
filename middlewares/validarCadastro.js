const {Usuario} = require('../models')

module.exports = async (request,response,next) =>{
    const {nome,email,senha} = request.body;

    if(nome == null || email == null || senha == null)
    {
        return response.status(400).json({error: "Complete todas as informações!"});
    }
    const user = await Usuario.findAll({
        where:{email}
    });
    if(user.length){
        return response.status(400).json({error: "E-mail já cadastrado!"});
    }else if(senha>6 || senha<12){
        return response.status(400).json({error: "Senha inválida!"});
    }
    return next();
}