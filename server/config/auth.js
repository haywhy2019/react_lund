// ///auth0
// const jwt = require("express-jwt");
// const jwksRsa = require("jwks-rsa");

// // Set up Auth0 configuration
// const authConfig = {
//     domain: "dev-8f7h87oz.auth0.com",
//     audience: "admin"
//   };


//   // Define middleware that validates incoming bearer tokens
// // using JWKS from dev-8f7h87oz.auth0.com
// var jwtCheck = jwt({
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: 'https://dev-8f7h87oz.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'http://localhost:3000/admin',
//   issuer: 'https://dev-8f7h87oz.auth0.com/',
//   algorithms: ['RS256']
// });

// app.use(jwtCheck);

// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });
  

// module.exports = jwtCheck;