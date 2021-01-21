module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("article", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subhead: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });

  Article.associate = (models) => {
    Article.belongsTo(models.Author);
    Article.belongsTo(models.Category);
    Article.belongsToMany(models.Review, {
      through: { model: models.Review, unique: false },
    });

    // Article.belongsTo(models.Category);
    // Article.hasMany(models.Cart);
    // Article.belongsToMany(models.User, {
    //   through: { model: models.Cart, unique: false },
    // });
  };

  return Article;
};
