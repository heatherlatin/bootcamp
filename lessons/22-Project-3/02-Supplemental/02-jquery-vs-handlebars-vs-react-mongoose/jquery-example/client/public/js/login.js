$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var submitButton = $("button");
  var alertTimeout;

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      loginForm.addClass("was-validated");
      return;
    }
    const email = emailInput.val();
    const password = passwordInput.val();

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(email, password);
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

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  async function loginUser(email, password) {
    loginForm.removeClass("was-validated");
    submitButton.prop("disabled", true);
    try {
      await $.post("/api/login", {
        email: email,
        password: password
      });
      location.replace("/");
    } catch (err) {
      handleLoginErr(err);
    } finally {
      submitButton.prop("disabled", false);
    }
  }

  function handleLoginErr(err) {
    passwordInput.val("");
    if (err.status === 401) {
      return setAlert("Incorrect email or password");
    }
    // null checking to get message
    const message = err.responseJSON
      && err.responseJSON.errors
      && err.responseJSON.errors.length
      && err.responseJSON.errors[0].message;
    setAlert(message || err.responseText);
  }
});
