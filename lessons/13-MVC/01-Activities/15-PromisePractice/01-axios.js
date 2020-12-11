// Example of where we have seen promises:
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
// axios.get returns a special kind of object
// called a promise:
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });