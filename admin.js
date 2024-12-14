const {kafkajs} = require("./client"); 

async function init() {
    const admin = kafkajs.admin();
    console.log("Admin Connecting...");
    admin.connect();
    console.log("Admin Connected Sucessfully...");
    console.log("Creating Topic [rider-updates]");
    
    await admin.createTopics({
        topics: [{
            topic:"rider-updates",
            numPartitions:2
        }]
    });

    console.log("Topic creation success");

    await admin.disconnect();
}

init();