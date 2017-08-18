const router = require('express').Router()
const models = require('./db')
const Puppy = models.Puppy;

// when a user hits this route, we want to send out every puppy to them.
router.get('/', (req, res, next) => {
})

// when a user hits this route, we want to send them a puppy by its id.
router.get('/:id', (req, res, next) => {
})

// when a user hits this route, we want to create a puppy.
router.post('/addAPuppy', (req, res, next) => {
})

// when a user hits this route, we want to send them the puppy by its id.
router.put('/:id', (req, res, next) => {
})

// when a user hits this route, we want to destroy  a puppy by its id and send them a 201 status code.
router.destroy('/:id', (req, res, next) => {
})


module.exports = router;
