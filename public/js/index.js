$("#logIn").on("click", function() {
  event.preventDefault();
  var currentURL = window.location

  var returningUserName = $("#returningUserName").val().trim();
  var returningUserPassword = $("#returningUserPassword").val().trim();

  var returningUser = {
      userName: returningUserName,
      password: returningUserPassword
  }
  console.log(returningUser)

  $.get("api/users", function(res) {
      console.log(res);
      for (var i = 0; i < res.length; i++){
          if (returningUser.userName === res[i].userName && returningUser.password === res[i].password) {
              location.href = currentURL;
          } else if (returningUser.userName !== res[i].userName || returningUser.password !== res[i].password) {
              var wrongUserOrPass = $("<p>");
              wrongUserOrPass.text("Either the username or password are incorrect. Please try agian.")
              $(".cont_form_login").append(wrongUserOrPass);
          }
      }
  })
})

$("#signUp").on("click", function() {
  var currentURL = window.location;

  var newUserName = $("#newUserName").val().trim();
  var newUserPassword = $("#newUserPassword").val().trim();
  var newUserPasswordConfirm = $("#newUserPasswordConfirm").val().trim();

  var newUser = {
      userName: newUserName,
      password: newUserPassword
  }
  console.log(newUser)

  var passwordsDontMatch = $("<p>");
  passwordsDontMatch.text("Sorry, passwords do not match. Please try again.");

  if (newUserPassword == newUserPasswordConfirm) {
      $.post(currentURL + "api/users", newUser);
      // location.href = currentURL
      $("#clubhouseLink").removeAttr("href");
      $("#clubhouseLink").attr("href", "/clubhouse");
      $("#draftroomLink").removeAttr("href");
      $("#draftroomLink").attr("href", "/draft");
  } else {
      $(".cont_form_sign_up").append(passwordsDontMatch);
  }
})