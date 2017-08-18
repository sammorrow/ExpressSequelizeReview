const express = require('express');
const app = express();


const morgan = require('morgan');
const bodyParser = require('body-parser');

// We are deconstructng `require('./db') here`. Not sure how that works? Check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const { db, Puppy } = require('./db');

const router = 'not the real router' //we need to provide this variable with the proper value

// middleware for body parsing and logging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false })); // this CREATES req.body. it MUST come before routes whose callbacks involve req.body
app.use(bodyParser.json());


// we want go into the router here (commented `router` out below to prevent errors)
app.use('/puppies' //, router);
);

// this is our error handling route. any routes thaat call next() with a value (e.g. `next(err)`) will pass that value down to here.
app.use((err, req, res, next) => {
    console.log('\n---We have an error---\n')
    res.sendStatus(err.status)
})


db.sync({force: true}) // flush out our database whenever we start up.
    .then(() => {
        app.listen(3000, () => {
            console.log('Server listening on port 3000')
        })
    })

