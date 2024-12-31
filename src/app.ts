import { MonogoDatabase } from './config/mongo/init';
import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentation/server';


(async() => {
  main();
})();


async function main(){

  await MonogoDatabase.connect({mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_USER})
  //Server.start();
}


