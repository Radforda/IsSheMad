module.exports = function(sequelize, DataTypes) {
    var userInput = sequelize.define("userinput", {
 
      user: {
        type: DataTypes.STRING,
        defaultValue:"denina"
    
      },
      text: {
        type: DataTypes.STRING
      },
      score:{
          type: DataTypes.DECIMAL(7,4)
      }
    });
    return userInput;
  };
  