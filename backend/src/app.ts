import {Server} from "./server";

function startApp() {
  const server = new Server();
  server.start()
      .then(() => {
      }).catch((e) => {
        console.log(e);
  })

}

startApp();