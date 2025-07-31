import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://root:develop@mongodb:27017';
export let client = new MongoClient(uri);

if (process.env.NODE_ENV === 'development') {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  client = new MongoClient(uri);
}