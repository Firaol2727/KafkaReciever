import { Kafka,Partitioners }  from "kafkajs";
import { MicroService } from "../services/MicroService";

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

export const producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: 'product' })

export const ConnectAndInstantiateProducerAndConsumer = async () => {
    // Producing
    // await producer.connect()

    // Consuming
    try {
      await consumer.connect()
      console.log("Consumer Connected Success fully")
    } catch (error) {
      console.log("Error occured while connecting  with kafka!",error)
    }
    
   
  }
export const publishToKafka=async(topic:string,messages:any)=>{
      await producer.send({
      topic: 'user-topic',
      messages: messages,
    })
}
export const subscribeToKafka=async()=>{
    await consumer.subscribe({ topic: 'product-topic', fromBeginning: true})
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {

        if(message.value!=null){
          console.log("MESSAGE GOT ",{
          partition,
          offset: message.offset,
          value: message.value?.toString(),
          });
        const data=message.value?.toString();

        MicroService.chooseActivity(JSON.parse(data))
      }
      else{
            console.log("Message has no value")
      }
    }
  })
        
}
