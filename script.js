let users = {
  admin: {
    lg: "admin",
    pw: "admin1234",
  },
  user: {
    lg: "user",
    pw: "user1234",
  },
};

function sign_in() {
  let lg_in = document.querySelector("#log");
  let pw_in = document.querySelector("#pass");

  let lg = lg_in.value;
  let pw = pw_in.value;

  for (const key in users) {
    if (users[key]["lg"] == lg && users[key]["pw"] == pw) {
      localStorage.setItem("role", key);
    }
  }

  let role = localStorage.getItem("role");

  if (localStorage.role == null) {
    console.log("Тебя нет в базе данных :(");
  } else {
    if (role == "admin") {
      document.getElementById("section-adminka").style.visibility = "visible";
      document.getElementById("section-auth").style.display = "none";
      document.getElementById("profile").style.visibility = "visible";
      document.getElementById("logOut").style.visibility = "visible";
      document.getElementById("signin").style.display = "none";
    } else {
      document.getElementById("section-main").style.visibility = "visible";
      document.getElementById("section-auth").style.display = "none";
      document.getElementById("signin").style.display = "none";
      document.getElementById("profile").style.visibility = "visible";
      document.getElementById("logOut").style.visibility = "visible";
    }
  }
}

function sign_up() {
  let lg_reg = document.querySelector("#log_reg ");
  let pw_reg = document.querySelector("#pass_reg");

  let lg = lg_reg.value;
  let pw = pw_reg.value;

  for (const key in users) {
    if (users[key]["lg"] == lg && users[key]["pw"] == pw) {
      console.log("Аккаунт уже зареган");
    } else {
      users[lg] = { lg, pw };
    }
  }
}

function vis() {
  document.getElementById("section-adminka").style.display = "none";
  document.getElementById("section-auth").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("section-main").style.display = "none";
  document.getElementById("section-profile").style.visibility = "visible";
}

function logOut() {
  localStorage.clear();
}
