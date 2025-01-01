import { LogEntity, LogSeverityLevel } from "./log.entity"


describe('LogEntity', () => {

  test('should create a LogEntity instance', () => {
    const dataObj = {
      message: 'Hola mundo',
      level: LogSeverityLevel.high,
      origin: 'log.entity.test.ts',
    }

    const log = new LogEntity(dataObj);

    expect( log ).toBeInstanceOf(LogEntity);
    expect( log ).toEqual({
      ...dataObj,
      createdAt: expect.any(Date)
    })
  })


})