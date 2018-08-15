const brain      = require('brain.js')
const trainData  = require('./src/training-data')
const serializer = require('./src/serializer')
const net        = new brain.NeuralNetwork()

net.train(serializer.serialize(trainData), {log: true})


const output = net.run(serializer.encode('did you get my messages???'))

console.log(output)
