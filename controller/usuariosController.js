const {Usuario, sequelize} = require('../models/');
const {Op} = require('sequelize');

module.exports = {
    index: async (request,response) => {
        let usuarios = await Usuario.findAll();
        return response.json(usuarios);
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
        await Usuario.update({
            nome: nome,
            email: email,
            senha: senha
        }, {
            where: {
                id: id
            }
        })

        return response.status(201).send();
    },
    delete: async(request,response) => {
        const {id} = request.params;
        await Usuario.destroy({
            where: {
                id: id
            }
        })

        return response.status(201).send();
    }
}