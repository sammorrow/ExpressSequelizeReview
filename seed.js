const Promise = require('bluebird');
const { db } = require('./db')

const seedData = {
  puppy:
    [
        {
          name: "Greg",
          age: 83,
          favFood: "chocolate"
      }, {
          name: "Joe",
          age: 21,
          favFood: "cherries"
      }, {
          name: "Pete",
          age: 22,
          favFood: "pina colada"
      }, {
          name: "Dog",
          age: 11,
          favFood: "arf arf"
      }, {
          name: "Robot",
          age: 7,
          favFood: "peaches"
      }, {
          name: "Pele",
          age: 3,
          favFood: "coca-cola"
      }, {
          name: "Aussie",
          age: 9,
          favFood: "chicken"
      }, {
          name: "Perky",
          age: 2,
          favFood: "dog food"
      }
  ],
  location: [{
    address: '5 Hanover'
  },
  {
    address: '12 Elm Street'
  },
  {
    address: '7 Fake St'
  }]
}


db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(seedData), function (name) {
    return Promise.map(seedData[name], function (item) {
      return db.model(name)
      .create(item);
    })
  });
})
.then(function () {
  console.log("Finished inserting data");
})
.catch(function (err) {
  console.error('There was a problem: \n', err, err.stack);
})
.finally(function () {
  db.close()
  console.log('connection closed');
  return null;
});
