require("dotenv").config();
const express = require("express");
const app = express();
const logger = require("./logger/index");
app.listen(3000, () => {
  console.log("listening on: localhost:3000");
  //console.log(logger);
  logger.info("text info");
  logger.warn("text warn");
  logger.error("text error");
  logger.error(new Error("something went wrong"));
  //logger.debug("text error");
  // console.info("text info");
  // console.error("text error");
  // console.error(new Error("Something went wrong"));
});
