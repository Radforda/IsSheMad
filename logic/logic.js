const brain      = require('brain.js')
const trainData  = require('./src/training-data')
const serializer = require('./src/serializer')
const net        = new brain.NeuralNetwork()

const logic={
    train : function(){net.train(serializer.serialize(trainData), {log: true})},
    run : function(message){
        message=serializer.encode(message);
        maxLengthInput=100;
        while (message.length < maxLengthInput) {
            message.push(0);
          }
        var result=net.run(message);
    return result}
};

module.exports=logic;


// var message="you better have not taken it";
// message=serializer.encode(message);
// console.log(message);
// maxLengthInput=100;
// while (message.length < maxLengthInput) {
//     message.push(0);
//   }

// var test=net.run(message);
    


// console.log(test);


