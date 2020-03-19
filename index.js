/** @format */

const express = require('express');
const port = 5000;

const router = express();

router.listen(port, () => {
  console.log(` \n *** http:localhost:${port} *** \n`);
});
