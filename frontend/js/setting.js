
// Save settings
function saveSettings() {
  const darkMode = document.getElementById("darkModeToggle").checked;
  const emailNotify = document.getElementById("emailToggle").checked;

  localStorage.setItem("darkMode", darkMode);
  localStorage.setItem("emailNotify", emailNotify);

  document.body.classList.toggle("dark-mode", darkMode);

  alert("Settings saved successfully ✅");
}