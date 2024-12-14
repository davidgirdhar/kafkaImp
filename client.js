const {Kafka} = require("kafkajs");

const kafkaip = "192.168.1.11:9092";
exports.kafkajs = new Kafka({
    brokers:[kafkaip],
    clientId:"first-app"
})