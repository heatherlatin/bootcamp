console.log("cats");

$.ajax({
    type: "GET",
    url: "/api/cats",
  }).then(response => console.log(response));