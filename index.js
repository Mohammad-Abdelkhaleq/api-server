"use strict"
require("dotenv").config();
let port = process.env.PORT;
const app = require("./src/server.js");
const { db } = require("./src/models/index.js");

db.sync().then(() => {
    
    app.start(port);

});

