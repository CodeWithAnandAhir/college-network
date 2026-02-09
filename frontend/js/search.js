// Demo users (future: backend / DB)
const sidebarUsers = [
  { name: "Anand Ahir", avatar: "assets/Anand.jpeg" },
  { name: "Rahul Sharma", avatar: "" },
  { name: "Aman Verma", avatar: "" },
  { name: "Pooja Singh", avatar: "" },
  { name: "Neha Gupta", avatar: "" }
];

function sidebarSearchUsers() {
  const input = document
    .getElementById("sidebarSearchInput")
    .value
    .toLowerCase();

  const results = document.getElementById("sidebarSearchResults");
  results.innerHTML = "";

  if (input === "") return;

  const filteredUsers = sidebarUsers.filter(user =>
    user.name.toLowerCase().includes(input)
  );

  if (filteredUsers.length === 0) {
    results.innerHTML = `<small>No users found</small>`;
    return;
  }

  filteredUsers.forEach(user => {
    results.innerHTML += `
      <div class="sidebar-user" onclick="openUserFromSidebar('${user.name}')">
        <img src="${user.avatar || 'assets/avatar.png'}">
        <span>${user.name}</span>
      </div>
    `;
  });
}

function openUserFromSidebar(name) {
  alert("Open profile of " + name);
  // future: showSection('profile') + load user data
}
