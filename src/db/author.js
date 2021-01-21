module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define("author", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Author.associate = (models) => {
    Author.belongsToMany(models.Article, {
      through: { model: models.Review, unique: false },
    });
    Author.hasMany(models.Review);
  };
  return Author;
};
