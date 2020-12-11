$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var submitButton = $("button");
  var alertTimeout;

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      signUpForm.addClass("was-validated");
      return;
    }
    const email = emailInput.val();
    const password = passwordInput.val();

    // If we have an email and password we run the loginUser function and clear the form
    signupUser(email, password);
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

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  async function signupUser(email, password) {
    signUpForm.removeClass("was-validated");
    submitButton.prop("disabled", true);
    try {
      await $.post("/api/signup", {
        email: email,
        password: password
      });
      window.location.replace("/");
    } catch (err) {
      handleSignupErr(err);
    } finally {
      submitButton.prop("disabled", false);
    }
  }

  function handleSignupErr(err) {
    // null checking to get message
    const message = err.responseJSON
      && err.responseJSON.errors
      && err.responseJSON.errors.length
      && err.responseJSON.errors[0].message;
    setAlert(message || err.responseText);
  }
});
