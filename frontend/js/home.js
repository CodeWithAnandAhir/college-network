const posts = [
  {
    user: "Anand Ahir",
    avatar: "assets/Anand.jpeg",
    time: "2 hours ago",
    text: "Building my own college networking platform 🚀",
    image: "assets/post1.jpg"
  },
  {
    user: "Rahul Sharma",
    avatar: "",
    time: "Yesterday",
    text: "Anyone interested in MERN stack study group?",
    image: ""
  }
];

function loadFeed() {
  const feed = document.getElementById("feedContainer");
  feed.innerHTML = "";

  posts.forEach(post => {
    feed.innerHTML += `
      <div class="post-card">
        <div class="post-header">
          ${
            post.avatar
              ? `<img src="${post.avatar}" class="post-avatar">`
              : `<span class="post-avatar">👤</span>`
          }
          <div>
            <p class="post-user">${post.user}</p>
            <small class="post-time">${post.time}</small>
          </div>
        </div>

        <p class="post-text">${post.text}</p>

        ${
          post.image
            ? `<img src="${post.image}" class="post-image">`
            : ""
        }

        <div class="post-actions">
          <button onclick="likePost()">❤️ Like</button>
          <button>💬 Comment</button>
        </div>
      </div>
    `;
  });
}

function likePost() {
  alert("❤️ Liked!");
}

document.addEventListener("DOMContentLoaded", loadFeed);

function openCreatePost() {
  document.getElementById("createPostModal").style.display = "block";
}

function closeCreatePost() {
  document.getElementById("createPostModal").style.display = "none";
}

function publishPost() {
  const text = document.getElementById("postText").value.trim();
  if (text === "") return alert("Post cannot be empty");

  const feed = document.getElementById("feed");

  const postHTML = `
    <div class="post-card">
      <div class="post-header">
        <img src="assets/avatar.png" class="post-avatar">
        <div>
          <p class="post-user">You</p>
          <small class="post-time">Just now</small>
        </div>
      </div>

      <p class="post-text">${text}</p>

      <div class="post-actions">
        <button>❤️ Like</button>
        <button>💬 Comment</button>
      </div>
    </div>
  `;

  feed.insertAdjacentHTML("afterbegin", postHTML);

  document.getElementById("postText").value = "";
  closeCreatePost();
}

