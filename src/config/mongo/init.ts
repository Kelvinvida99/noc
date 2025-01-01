import mongoose from "mongoose";

interface ConnectionOptions {
  mongoUrl: string,
  dbName: string;
}

export class MonogoDatabase {
  static async connect( options: ConnectionOptions ) {
    const {mongoUrl, dbName} = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      })

      //console.log('Mongo connection')
      return true
    } catch (error) {
      console.log('Mongo Connection error');
      throw error;
    }
  }
}