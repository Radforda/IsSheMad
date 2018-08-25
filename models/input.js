module.exports = function(sequelize, DataTypes) {
    var userInput = sequelize.define("userinputs", {
 
      user: {
        type: DataTypes.STRING,
        defaultValue:"denina"
    
      },
      text: {
        type: DataTypes.STRING
      },
      score:{
          type: DataTypes.INTEGER
      }
    });
    return userInput;
  };
  