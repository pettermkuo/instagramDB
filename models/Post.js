module.exports = (sequelize, DataType) => {
    const Post = sequelize.define(
        'Post', {
            texto: DataType.STRING,
            usuarios_id: DataType.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );
    Post.associate = (models) => {
        //relação n:1
        Post.belongsTo(models.Usuario, {as:"usuario", foreignKey:"usuarios_id"});
        
        //relação 1:n
        Post.hasMany(models.Comentario,{as:"comentario", foreignKey:"posts_id"});
        
        //relação n:m
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
    }

    return Post;
    
}