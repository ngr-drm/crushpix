import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://root:develop@mongodb:27017';
const client = new MongoClient(uri);

let isConnected = false

export async function getDb() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log("database on...");
  }

  return client.db('crushpix');
}