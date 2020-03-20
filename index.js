/** @format */

const port = 5000;
server = require('./server');

server.listen(port, () => {
  console.log(` \n *** http://localhost:${port} *** \n`);
});
