const {Post, sequelize} = require('../models/');
const {Op} = require('sequelize');

module.exports = {
    index: async (request,response) => {
        let posts = await Post.findAll();
        return response.json(posts);
    },
    create: async (request,response) => {
        const {texto,usuarios_id} = request.body;
        const post = {
            texto,
            usuarios_id
        }
        await Post.create(post);
        return response.status(201).json(post);
    },
    update: async (request,response) => {
        const {id} = request.params;
        const {texto} = request.body;
        await Post.update({
            texto: texto
        }, {
            where: {
                id: id
            }
        })

        return response.status(201).send();
    },
    delete: async (request,response) => {
        const {id} = request.params;
        await Post.destroy({
            where: {
                id: id
            }
        })

        return response.status(201).send();
    }
}