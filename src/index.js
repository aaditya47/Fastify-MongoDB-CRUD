/*
Import Fastify, Mongoose and our routes
*/
const fastify = require('fastify');
const mongoose = require('mongoose');
const routes = require('./routes/apiRoutes');

/*
Initialize fastify object
*/
const app = fastify();

/*
MongoDB connection code. Fill in the link to your database
*/
try {
    mongoose.connect('mongodb://localhost:27017/fastify_crud');
} catch (e) {
    console.error(e);
}

/*
GET /: Root route that returns a welcome message
*/
app.get('/', async (request, reply) => {
    try {
        return {
            message: 'Welcome to the API'
        };
    }
    catch (err) {
        console.error(err);
    }
});

/*
Using the routes from apiRoutes
*/
routes(app);

/*
Make the application listen to port 5000
*/
app.listen(5000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
