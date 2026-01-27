# 🎓 College Student Networking System

A **college-only social networking backend system** built using **Node.js, Express.js, and MySQL**.
It allows students to register using their college email, manage profiles, follow each other, chat privately, and create groups.

---

## 🚀 Features

* 🔐 College Email Based Authentication (JWT)
* 👤 Student Profile Management
* 🔎 Search Students
* 🤝 Follow / Followers System
* 💬 One-to-One Chat System
* 👥 Create & Manage Groups
* 🔒 JWT Protected APIs
* 🗄️ MySQL Database Integration

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* dotenv

### Database

* MySQL

### Tools

* Nodemon
* Postman / Thunder Client
* MySQL Workbench

---

## 📁 Project Structure

```
college-network/
│
├── server.js
├── package.json
├── .env
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── followController.js
│   ├── chatController.js
│   └── groupController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── followRoutes.js
│   ├── chatRoutes.js
│   └── groupRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
└── node_modules/
```

---

## 🗄️ Database Setup

> ⚠️ **Important Note**
> `groups` is a reserved keyword in MySQL, so the table name is changed to `student_groups`.

```sql
CREATE DATABASE college_network;
USE college_network;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  branch VARCHAR(50),
  year INT,
  bio TEXT,
  skills VARCHAR(255)
);

CREATE TABLE follows (
  follower_id INT,
  following_id INT,
  UNIQUE(follower_id, following_id)
);

CREATE TABLE messages (
  sender_id INT,
  receiver_id INT,
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE student_groups (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  created_by INT
);

CREATE TABLE group_members (
  group_id INT,
  user_id INT
);
```

---

## ⚙️ How to Run the Project

### 1️⃣ Clone Project

```bash
git clone https://github.com/your-username/college-network.git
cd college-network
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Create Environment File

Create a `.env` file in the root directory:

```
PORT=5000
JWT_SECRET=college_secret_key
```

---

### 4️⃣ Configure Database

Edit `config/db.js`:

```js
host: "localhost",
user: "root",
password: "",
database: "college_network"
```

(Change username/password if required)

---

### ▶️ Run Project

```bash
npx nodemon server.js
```

✅ Expected Output:

```
MySQL Connected ✅
Server started on port 5000
```

Open browser:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### 🔐 Authentication

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/auth/test     | Test auth route  |
| POST   | /api/auth/register | Register student |
| POST   | /api/auth/login    | Login student    |

---

### 👤 User

| Method | Endpoint             | Description     |
| ------ | -------------------- | --------------- |
| GET    | /api/users/me        | Get profile     |
| PUT    | /api/users/update    | Update profile  |
| GET    | /api/users/search?q= | Search students |

---

### 🤝 Follow System

| Method | Endpoint                  | Description   |
| ------ | ------------------------- | ------------- |
| POST   | /api/follow/follow/:id    | Follow user   |
| GET    | /api/follow/followers/:id | Get followers |
| GET    | /api/follow/following/:id | Get following |

---

### 💬 Chat

| Method | Endpoint       | Description  |
| ------ | -------------- | ------------ |
| POST   | /api/chat/send | Send message |
| GET    | /api/chat/:id  | Get messages |

---

### 👥 Groups

| Method | Endpoint           | Description  |
| ------ | ------------------ | ------------ |
| POST   | /api/groups/create | Create group |
| POST   | /api/groups/add    | Add member   |
| GET    | /api/groups/my     | My groups    |

---

## 🔒 Authorization

For protected routes, add JWT token in headers:

```
Authorization: <JWT_TOKEN>
```

---

## 🚀 Future Enhancements

* Real-time chat using Socket.io
* Group chat
* File sharing
* Notifications
* Frontend with React.js
* Cloud deployment (AWS / Render)

---

## 🎓 Academic Use

* Mini Project
* Major Project
* Final Year Project
* Resume / Portfolio Project

---

### ⭐ Interview One-Line Summary

> “A college-exclusive social networking backend built with Node.js, Express, JWT authentication, and MySQL, enabling secure student connections, messaging, and group collaboration.”

---