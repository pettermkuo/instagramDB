module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataType.STRING,
            email: DataType.STRING,
            senha: DataType.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );
    Usuario.associate = (models) => {
        //relação 1:n
        Usuario.hasMany(models.Post,{as:"posts", foreignKey:"usuarios_id"});

        //relação n:m
        Usuario.belongsToMany(models.Post, {
            as: "curtiu", //alias da relação
            through: "curtidas", //tabela intermediaria
            foreignKey: "usuarios_id",
            otherKey: "posts_id",
            timestamps: false
        })
    }

    return Usuario;

}