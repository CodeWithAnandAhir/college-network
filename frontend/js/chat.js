const API = "http://localhost:5000/api";
const token = localStorage.getItem("token");

function send() {
  fetch(`${API}/chat/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify({
      receiver_id: receiver.value,
      message: message.value
    })
  })
  .then(res => res.text())
  .then(data => alert(data));
}
