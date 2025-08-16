import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env');
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.DATABASE_NAME;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
let dbInstance: Db | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const getDb = async (): Promise<Db> => {
  if (dbInstance) return dbInstance;
  const client = await clientPromise;
  dbInstance = client.db(dbName);
  return dbInstance;
};

export default clientPromise;

