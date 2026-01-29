const API = "http://localhost:5000/api";
const token = localStorage.getItem("token");

fetch(`${API}/users/me`, {
  headers: { Authorization: token }
})
.then(res => res.json())
.then(data => {
  document.getElementById("profile").innerText =
    JSON.stringify(data, null, 2);
});

function searchUser() {
  fetch(`${API}/users/search?q=${search.value}`, {
    headers: { Authorization: token }
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("results").innerText =
      JSON.stringify(data, null, 2);
  });
}
