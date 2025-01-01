import mongoose from "mongoose"
import { envs } from "../../plugins/envs.plugin"
import { MonogoDatabase } from "../init"
import { LogModel } from "./log.model"


describe('log.model.test.ts', () => {
  beforeAll(async() => {
    await MonogoDatabase.connect({
      mongoUrl: envs.MONGO_URL,
      dbName: envs.MONGO_DB_NAME
    })
  })

  afterAll(() => {
    mongoose.connection.close();
  })

  test('should return LogModel', async() => {
    const logData = {
      origin: 'log.model.test.ts',
      message: 'test-message',
      level: 'low',
    }


    const log = await LogModel.create(logData);
    
    expect(log).toEqual(expect.objectContaining({
      ...logData,
      id: expect.any(String),
      createdAt: expect.any(Date),
    }))
  })
})