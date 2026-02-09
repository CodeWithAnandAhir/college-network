let currentUser = null;

function openChat(name, el) {
  currentUser = name;

  // header update
  document.getElementById("chatUserName").innerText = name;
  document.getElementById("chatStatus").innerText = "Online";

  // active user highlight
  document.querySelectorAll(".chat-users .user")
    .forEach(u => u.classList.remove("active"));
  el.classList.add("active");

  // clear chat
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = `
    <p class="empty-chat" id="emptyChat">
      👋 Start a conversation with ${name}
    </p>
  `;
}

function sendMessage() {
  if (!currentUser) {
    alert("Select a user first");
    return;
  }

  const input = document.getElementById("chatMessage");
  const text = input.value.trim();
  if (text === "") return;

  // remove empty text
  const empty = document.getElementById("emptyChat");
  if (empty) empty.remove();

  const msg = document.createElement("div");
  msg.className = "message sent";
  msg.innerText = text;

  document.getElementById("chatBox").appendChild(msg);
  input.value = "";

  // auto scroll
  document.getElementById("chatBox").scrollTop =
    document.getElementById("chatBox").scrollHeight;
}
