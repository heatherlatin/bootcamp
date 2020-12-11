$(document).ready(function () {
  // Getting references to our form and input
  var createCandleForm = $(".create-candle");
  var nameInput = $("#candle-name");
  var scentInput = $("#candle-scent");
  var heightInput = $("#candle-height");
  var submitButton = $("button");

  // When the create button is clicked, we validate the email and password are not blank
  createCandleForm.on("submit", function (event) {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      createCandleForm.addClass("was-validated");
      return;
    }

    const name = nameInput.val().trim();
    const scent = scentInput.val().trim();
    const height = parseInt(heightInput.val());

    console.log(name, scent, height);

    // If we have an email and password, run the createCandle function
    createCandle(name, scent, height);
  });

  function setAlert(message) {
    $("#alert").text(message);
    $("#alert").fadeIn(500);
    alertTimeout = setTimeout(clearAlert, 5000);
  }

  function clearAlert() {
    clearTimeout(alertTimeout);
    $("#alert").fadeOut(500);
  }

  // Does a post to the create route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  async function createCandle(name, scent, height) {
    createCandleForm.removeClass("was-validated");
    submitButton.prop("disabled", true);
    try {
      await $.post("/api/candles", {
        name, scent, height
      });
      window.location.replace("/candle");
    } catch (err) {
      handleCreateErr(err);
    } finally {
      submitButton.prop("disabled", false);
    }
  }

  function handleCreateErr(err) {
    // null checking to get message
    const message = err.responseJSON
      && err.responseJSON.errors
      && err.responseJSON.errors.length
      && err.responseJSON.errors[0].message;
    setAlert(message || err.responseText);
  }
});
