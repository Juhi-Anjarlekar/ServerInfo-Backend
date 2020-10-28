
const express = require("express");
const cors = require("cors");
const serverInfoRoute = require("./apis/serverInfo");


const app = express();
app.use(cors());
app.use('/serverInfo/', serverInfoRoute);
app.listen(8080, () => console.log("ServerInfo listening on port 8080!"));