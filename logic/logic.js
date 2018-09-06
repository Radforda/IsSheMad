const brain = require('brain.js')
const trainData = require('./src/training-data')
const serializer = require('./src/serializer')
const net = new brain.NeuralNetwork()

const logic = {
    train: function() {
        net.train(serializer.serialize(trainData), {
            log: true,
            iterations: 700
        })
    },
    run: function(message) {
        message = serializer.encode(message);
        if (message.length > 50) {
            message.slice(0, 50);
        };
        maxLengthInput = 50;
        while (message.length < maxLengthInput) {
            message.push(0);
        }
        var result = net.run(message);
        console.log(result);
        //weight super angry and happy higher
        result.superAngry = result.superAngry * 2;
        result.happy = result.happy * 2;

        //normalize
        total = result.okay + result.angry + result.superAngry;
        //result.okay=result.okay/total;
        result.happy = result.happy / total;
        result.angry = result.angry / total;
        result.superAngry = result.superAngry / total;

        //add angry and subtract happy to determine howAngry then convert to percentage
        howAngry = Math.round((result.superAngry + result.angry - result.happy) * 100);
        if (howAngry < 0) {
            howAngry = 0
        };
        return howAngry
    }
};

module.exports = logic;




