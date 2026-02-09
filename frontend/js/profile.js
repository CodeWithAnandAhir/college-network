function loadProfile() {
  const profile = JSON.parse(localStorage.getItem("profile"));

  if (!profile) return;

  document.getElementById("profileName").innerText = profile.name || "";
  document.getElementById("profileBranch").innerText = profile.branch || "";
  document.getElementById("profileYear").innerText = profile.year || "";
  document.getElementById("profileBio").innerText = profile.bio || "";
  document.getElementById("profileSkills").innerText = profile.skills || "";

  document.getElementById("editName").value = profile.name || "";
  document.getElementById("editBranch").value = profile.branch || "";
  document.getElementById("editYear").value = profile.year || "";
  document.getElementById("editBio").value = profile.bio || "";
  document.getElementById("editSkills").value = profile.skills || "";
}

function enableEdit() {
  document.getElementById("editProfile").style.display = "block";
}

function saveProfile() {
  const profile = {
    name: document.getElementById("editName").value.trim(),
    branch: document.getElementById("editBranch").value.trim(),
    year: document.getElementById("editYear").value.trim(),
    bio: document.getElementById("editBio").value.trim(),
    skills: document.getElementById("editSkills").value.trim()
  };

  localStorage.setItem("profile", JSON.stringify(profile));
  alert("Profile saved ✅");

  loadProfile();
  document.getElementById("editProfile").style.display = "none";
}

function editPost(btn) {
  const postCard = btn.closest(".post-card");
  const postText = postCard.querySelector(".post-text");

  const newText = prompt("Edit your post:", postText.innerText);

  if (newText !== null && newText.trim() !== "") {
    postText.innerText = newText;
  }
}

function deletePost(btn) {
  const postCard = btn.closest(".post-card");

  if (confirm("Are you sure you want to delete this post?")) {
    postCard.remove();
  }
}

function likePost() {
  alert("❤️ Liked!");
}

function commentPost() {
  alert("💬 Comment feature coming soon!");
}

function openPhotoPicker() {
  document.getElementById("photoInput").click();
}

function changeProfilePhoto(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    const imageData = reader.result;

    // update profile image
    document.getElementById("profileImage").src = imageData;

    // update sidebar image
    document.getElementById("sidebarAvatar").src = imageData;

    // save image
    localStorage.setItem("profilePhoto", imageData);
  };

  reader.readAsDataURL(file);
}

/* Load saved image on refresh */
document.addEventListener("DOMContentLoaded", () => {
  const savedPhoto = localStorage.getItem("profilePhoto");
  if (savedPhoto) {
    document.getElementById("profileImage").src = savedPhoto;
    document.getElementById("sidebarAvatar").src = savedPhoto;
  }
});
