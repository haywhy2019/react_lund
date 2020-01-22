const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const path = require('path');





const authConfig = {
    domain: 'http://localhost:3000/admin',
    audience: 'https://dev-8f7h87oz.auth0.com/',
    algorithms: ['RS256']
  };


  const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-8f7h87oz.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3000/admin',
    issuer: 'https://dev-8f7h87oz.auth0.com/',
    algorithm: ["RS256"]
  });

  app.get("/admin", checkJwt, (req, res) => {
    res.send({
      msg: "Your Access Token was successfully validated!"
    });
  })



//allow cors
// const config = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

app.use(cors());

//Bodyparser Middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

const routes = require("./server/routes/routes");
routes(app);


//db config
const db = require('./server/config/keys').mongoURI;


// connect to mongo
// un commentthis part link to mongoDB

mongoose
.connect(db, {useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
})
.then(()=> console.log('mongoDb connected...'))
.catch(err => console.log(err));


//serve static asset if in production

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



