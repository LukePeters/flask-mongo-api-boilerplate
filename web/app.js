$(function() {

  // Add User Submission
  var $addUserForm = $("#add-user-form"),
      $addUserSuccess = $("#add-user-success");
  
  $addUserForm.on("submit", function(e) {
    
    var data = {
      first_name: $addUserForm.find("#first_name").val(),
      last_name: $addUserForm.find("#last_name").val(),
      email: $addUserForm.find("#email").val(),
      password: $addUserForm.find("#password").val(),
    };

    console.log(data);

    $.ajax({
      url: "http://localhost:5000/user/",
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function(resp) {
        console.log(resp);
        $addUserForm.hide();
        $addUserSuccess.show();
      },
      error: function(error) {
        console.error(error);
        alert(error.responseJSON.message)
      }
    });
    
    e.preventDefault();
  });

  // User Login Submission
  var $loginForm = $("#login-form"),
      $loginSuccess = $("#login-success");
  
  $loginForm.on("submit", function(e) {
    
    var data = {
      email: $loginForm.find("#email").val(),
      password: $loginForm.find("#password").val(),
    };

    console.log(data);

    $.ajax({
      url: "http://localhost:5000/user/login/",
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function(resp) {
        console.log(resp);
        $loginForm.hide();
        $loginSuccess.show();
      },
      error: function(error) {
        console.error(error);
        alert(error.responseJSON.message)
      }
    });
    
    e.preventDefault();
  });
  
});