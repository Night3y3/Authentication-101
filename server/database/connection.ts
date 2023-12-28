import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
  // It will create new mongodb instance whenever server is created
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri(); // It will give Uniform resource identifier (URI) to connect to the database

  mongoose.set("strictQuery", true);
  const db = await mongoose.connect(uri);
  console.log(`Database connected to ${db.connection.name}`);
  return db;
}

export default connect;
