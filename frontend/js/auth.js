const API = "http://localhost:5000/api";

function register() {
  fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.text())
  .then(data => {
    alert(data);
    window.location.href = "login.html";
  });
}

function login() {
  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  });
}
