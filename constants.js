const { PORT = 9090 } = process.env;

let baseUrl = `http://localhost:${PORT}` 
if(process.env.NODE_ENV =="production"){
 baseUrl= "https://hubspot-tinkle-poc.onrender.com"
}

exports.PORT=PORT
exports.baseUrl=baseUrl
