const {Post, sequelize} = require('../models/');
const {Op} = require('sequelize');
const { request, response } = require('express');

module.exports = {
    index: async (request,response) => {
        let posts = await Post.findAll();
        return response.json(posts);
    },
    show: async (request,response) => {
        const {id} = request.params;
        const postShow = await Post.findAll({
            where:{
                usuarios_id: id
            }
        });
        return response.json(postShow);
    },
    create: async (request,response) => {
        const {texto,usuarios_id, n_likes, img} = request.body;
        const post = {
            texto,
            img,
            n_likes,
            usuarios_id
        }
        await Post.create(post);
        return response.status(201).json(post);
    },
    update: async (request,response) => {
        const {id} = request.params;
        const {texto,img,n_likes} = request.body;
        const postUpdated = await Post.update({
            texto: texto,
            img: img,
            n_likes: n_likes
        }, {
            where: {
                id: id
            }
        })

        return response.status(201).send(postUpdated);
    },
    delete: async (request,response) => {
        const {id} = request.params;
        const postDeletado = await Post.destroy({
            where: {id}
        })

        return response.status(201).json(postDeletado);
    }
}