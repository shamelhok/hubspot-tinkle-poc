// require('dotenv').config();
console.log("in index.js");
const { app } = require("./app");
const opn = require('open');

const { PORT, baseUrl } = require("./constants");

app.listen(PORT, () => console.log(`=== Starting your app on ${baseUrl} ===`));
console.log(process.env,process.env.NODE_ENV);
//if (process.env.NODE_ENV "development") {
    opn(baseUrl);
//}