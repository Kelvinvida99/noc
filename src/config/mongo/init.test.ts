import mongoose from "mongoose"
import { MonogoDatabase } from "./init"


describe('models/init.ts', () => {

  afterAll(() => {
    mongoose.connection.close();
  })
  
  test('should connect to MongoDB', async () => {
    const connected = await MonogoDatabase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!
    })

    expect(connected).toBe(true)
  })

  test('should throw an  error', async() => {
    try {
      const connected = await MonogoDatabase.connect({
        dbName: process.env.MONGO_DB_NAME!,
        mongoUrl: 'mongodb://kelvin:123456@localhost:27017',
      })
    } catch(error){
      
    }
  })
})