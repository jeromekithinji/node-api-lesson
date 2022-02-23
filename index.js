// Express is used to build our NodeJs server side application
const express = require('express');

// the .js signifies we're not importing it as a module
const router = require('./routes/students.js');

// to pull in the swagger pacakge and store it in a variable
const swaggerUI = require('swagger-ui-express');

// import swagger doc (to be made)
const swaggerDocument = require('./config/swagger.js');

const app = express();
const port = process.env.PORT || 3000; //specify the port (configure the port)

// use the json method for the format of the data
app.use(express.json());

// 'api' is the base endpoint
app.use('/api/students', router);

// Creating a HTTP Get request
// "/api" is the endpoint so it would be http://localhost:3000/api
app.get('/api', (req, res) =>res.send('Welcome to my API!!!!'));

// add route for swagger docs
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// add 404 route
// the * means all other routes
// it's usually last so that it doesn't intefere with the other routes
app.get("*", (req, res) => res.status(404).send("There is no content at this route"));

// run the server and tell it to listen req=request res=response 
app.listen(port, () => console.log(`Server is running on port ${port}`));
