function waitFor(seconds) {
  return new Promise((resolve, reject) => {
    if (isNaN(seconds) || seconds < 1) {
      reject(Error("Parameter 'seconds' must be a positive number!"));
      return;
    }
  
    setTimeout(function() {
      resolve("Success!");
    }, seconds * 1000);
  })
}


waitFor(-2).then(function(msg) {
  console.log(msg);
}).catch(function(err) {
  console.log(err);
})
