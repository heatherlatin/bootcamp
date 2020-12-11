console.log("dogs");

$.ajax({
    type: "GET",
    url: "/api/dogs",
  }).then(response => console.log(response));