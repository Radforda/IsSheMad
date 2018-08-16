module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    textInput: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    score: {
      type: DataTypes.DECIMAL(6,4),
      allowNull: false
    }
  });
};
return Post;



