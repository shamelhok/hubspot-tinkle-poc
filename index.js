// require('dotenv').config();
const { app } = require("./app");
const opn = require('open');

const { PORT, baseUrl } = require("./constants");

app.listen(PORT, () => console.log(`=== Starting your app on ${baseUrl} ===`));
//if (process.env.NODE_ENV "development") {
    opn(baseUrl);
//}