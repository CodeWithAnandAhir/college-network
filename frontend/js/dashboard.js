// ===== AUTH GUARD =====
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "login.html";
  throw new Error("Not logged in");
}

// ===== LOAD USER PROFILE (SAFE) =====
let profile = null;
try {
  profile = JSON.parse(localStorage.getItem("userProfile"));
} catch (e) {
  profile = null;
}

// Sidebar username
if (profile && profile.name) {
  const sidebarNameEl = document.getElementById("sidebarName");
  if (sidebarNameEl) {
    sidebarNameEl.textContent = profile.name;
  }
}

// ===== SECTION CONTROLLER =====
function showSection(sectionId, el) {
  // 1️⃣ Hide all sections
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });

  // 2️⃣ Show target section
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.classList.add("active");

  // 3️⃣ Sidebar active state
  document.querySelectorAll(".menu a, .bottom-menu a").forEach(a => {
    a.classList.remove("active");
  });

  if (el) {
    el.classList.add("active");
  }
  // auto close sidebar on mobile
  if (window.innerWidth <= 768) {
    document.querySelector(".sidebar").classList.remove("open");
  }
  else {
    // fallback: find by data-section
    const autoLink = document.querySelector(
      `.menu a[data-section="${sectionId}"], .bottom-menu a[data-section="${sectionId}"]`
    );
    if (autoLink) autoLink.classList.add("active");
  }

  // 4️⃣ Remember last section
  localStorage.setItem("lastSection", sectionId);

  // 5️⃣ Section-specific loaders
  if (sectionId === "profile" && typeof loadProfile === "function") {
    loadProfile();
  }
  if (sectionId === "chat" && typeof attachEnterHandler === "function") {
    attachEnterHandler();
  }
 
}

// ===== RESTORE LAST SECTION ON LOAD =====
document.addEventListener("DOMContentLoaded", () => {
  const lastSection = localStorage.getItem("lastSection") || "profile";
  showSection(lastSection);
});

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("lastSection");
  localStorage.removeItem("userProfile");
  window.location.href = "login.html";
}

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("open");
}



