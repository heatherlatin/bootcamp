$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  var $buttons = $(".put-rows-here");
  var $friends = $(".put-friends-here");
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.username);
  });
  $.get("/api/nonfriends").then(function (users) {
    $buttons.empty();
    var newUserButtons = users.map(user => $(`<button>${user.username}</button>`).click(function () {
      $.post("/api/friends", {
        username: user.username
      });
      window.location.reload();
    }));
    $buttons.append(newUserButtons);
  });
  $.get("/api/friends").then(function (users) {
    $friends.empty();
    var newUserButtons = users.map(user => $(`<div>${user.username}</div>`));
    $friends.append(newUserButtons);
  });
});
