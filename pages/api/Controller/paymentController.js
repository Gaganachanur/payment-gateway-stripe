import getName from '../hello'
const express = require("express");
const app = express();
const next = require("next");

const port = 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

// //   server.get("/test", (req, res) => {
// //     return app.render(req, res, "/test");
// //   });
  
// //   server.get("*", (req, res) => {
// //     return handle(req, res);
// //   });

//   server.get('/getname',getName());

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Ready on http://localhost:${port}`);
//   });
// });


app.get('/getname',getName())
app.listen(port,()=>{console.log('running')})