module.exports = function(sequelize, DataTypes) {
    var userInput = sequelize.define("userInput", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      text: {
        type: DataTypes.STRING,
      },
      score:{
          type: DataTypes.DECIMAL(6,4),
          allowNull:false
      }
    });
    return userInput;
  };
  