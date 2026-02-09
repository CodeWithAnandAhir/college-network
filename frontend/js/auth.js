
// ===== DOM ELEMENTS =====
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
const togglePassword = document.getElementById("togglePassword");

// ===== SHOW / HIDE PASSWORD =====
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "🙈";
  } else {
    password.type = "password";
    togglePassword.textContent = "👁";
  }
});

// ===== LOGIN VALIDATION =====
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value.trim() === "" || password.value.trim() === "") {
    error.style.color = "red";
    error.textContent = "All fields are required!";
    return;
  }

  if (password.value.length < 6) {
    error.style.color = "red";
    error.textContent = "Password must be at least 6 characters!";
    return;
  }

  // ✅ LOGIN SUCCESS
  localStorage.setItem("isLoggedIn", "true");

  error.style.color = "green";
  error.textContent = "Login successful 🎉";

  // ✅ REDIRECT
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 500);
});
