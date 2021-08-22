function regUser(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let passwd = document.getElementById("psw").value;
  let confirm_passwd = document.getElementById("psw-repeat").value;

  if (email == "") {
    console.log("`EMpty not requird");
  }

  console.log(email);
  console.log(passwd);
  console.log(confirm_passwd);
}
