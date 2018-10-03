//User validation process
//Login credentials are hard-codeed for demonstartion.
function UserValidation() {
  var name = document.forms["loginForm"]["user_name"].value;
  var password = document.forms["loginForm"]["p_word"].value;

  if (name != "mh"  || password != "mh123"){
    alert("Incorrect username or password");
    return false;
  }
}
