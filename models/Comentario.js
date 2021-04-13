module.exports = (sequelize, DataType) => {
    const Comentario = sequelize.define(
        'Comentario', {
            texto: DataType.STRING,
            usuarios_id: DataType.INTEGER,
            posts_id: DataType.INTEGER
        }, {
            tableName: "comentarios",
            timestamps: false
        }
    );

    Comentario.associate = (models) => {
        //relação n:1
        Comentario.belongsTo(models.Post, {as:"posts", foreignKey:"posts_id"});
    }

    return Comentario;

}