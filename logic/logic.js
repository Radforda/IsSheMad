const brain      = require('brain.js')
const trainData  = require('./src/training-data')
const serializer = require('./src/serializer')
const net        = new brain.NeuralNetwork()

const logic={
    train : function(){net.train(serializer.serialize(trainData), {log: true, iterations: 800})},
    run : function(message){
        message=serializer.encode(message);
        if(message.length>50){message.slice(0, 50);};
        maxLengthInput=50;
        while (message.length < maxLengthInput) {
            message.push(0);
          }
        var result=net.run(message);
        console.log(result);
        //weight super angry and happy higher
        result.superAngry=result.superAngry*2;
        result.happy=result.happy*2;

        //normalize
        total=result.okay+result.angry +result.superAngry;
        //result.okay=result.okay/total;
        result.happy=result.happy/total;
        result.angry=result.angry/total;
        result.superAngry=result.superAngry/total;
        
        //add angry and subtract happy to determine howAngry then convert to percentage
        howAngry=Math.round((result.superAngry+result.angry-result.happy)*100);
        if(howAngry<0){howAngry=0};
    return howAngry}
};

module.exports=logic;

// net.train(serializer.serialize(trainData), {log: true})

// var message="Where the hell are you!!";
// message=serializer.encode(message);
// console.log(message);
// maxLengthInput=100;
// while (message.length < maxLengthInput) {
//     message.push(0);
//   }


// var result=net.run(message);
// //weight super angry and happy higher
//  result.superAngry=result.superAngry*2;
//  result.happy=result.happy*2;
//  console.log("weighed happy" +result.happy +" \n weighed okay " +result.okay+"\n weighted  angry" +result.angry +"\n weighed superAngry " +result.superAngry);

//  //normalize

//  total=result.okay+ result.happy +result.angry +result.superAngry;
//  console.log("total "+total)
//  result.okay=result.okay/total;
//  result.happy=result.happy/total;
//  result.angry=result.angry/total;
//  result.superAngry=result.superAngry/total;
// console.log("normalized happy" +result.happy +" \nnormalized okay " +result.okay+"\n normalized angry" +result.angry +"\n normalized superAngry " +result.superAngry)
 

// //add angry and subtract happy to determine howAngry
//  howAngry=Math.round((result.superAngry+result.angry-result.okay-result.happy)*100);





// console.log(howAngry);


