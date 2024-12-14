const {kafkajs} = require("./client");

async function init() {
    const producer = kafkajs.producer();
    console.log("Connecting Producer");

    await producer.connect();

    console.log("Producer Connected Successfully");

    await producer.send({
        topic:"rider-updates",
        messages:[{
            partition:0,
            key:"location-update",
            value:JSON.stringify({
                name:"Tony",
                location:{
                    lat:"222",
                    long:"23445"
                }
            })
        }]
    });

    console.log("Disconnecting producer");
    
    await producer.disconnect(); 
}

init();