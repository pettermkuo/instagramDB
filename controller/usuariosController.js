const {Usuario} = require('../models');
const {Op} = require('sequelize');

module.exports = {
    index: async (request,response) => {
        const usuarios =  await Usuario.findAll();
        
        return response.render('usuarios', { listaUsuarios: usuarios });
    },
    create: async(request,response) => {
        const {nome,email,senha} = request.body;
        const usuario = {
            nome,
            email,
            senha
        }
        await Usuario.create(usuario);

        return response.status(201).json(usuario);
    },
    update: async(request,response) => {
        const {id} = request.params;
        const {nome,email,senha} = request.body;
        const usuarioUpdated = await Usuario.update({
            nome: nome,
            email: email,
            senha: senha
        }, {
            where: {
                id: id
            },
        })

        return response.status(201).send(usuarioUpdated);

    },
    delete: async(request,response) => {
        const {id} = request.params;
        const usuarioDeletado = await Usuario.destroy({
            where: {id}
        })

        return response.status(201).json(usuarioDeletado);
    }
}