# 💬 Real-Time Chat App
A simple and fast real-time chat app built with WebSocket, Node.js, and React. Join a room, enter your name, and start chatting live — no refreshes needed! 🚀

## 🖼️ Demo
🔗 [Live Demo](https://chatrooms-app-1.onrender.com)
⚠️ Please wait 15–30 seconds if the site is waking up (Render free tier puts apps to sleep). If it doesn’t load immediately — refresh the page. 🔄

---

## 🛠️ Tech Stack

### 🔧 Frontend:
- React
- Vite
- CSS Modules / your CSS method
- WebSocket (client)

### 🖥️ Backend:
- Node.js
- WebSocket (ws)
- Express

### ☁️ Deployment:
- Render (Frontend and Backend deployed separately)

---

## ⚙️ Features

- 🔌 Real-time communication via WebSockets
- 🧑 Join with your name and a room name
- 🌐 Deployed online for public use

---

## 📁 Project Structure
/client → React frontend (Vite)
/server → Node.js WebSocket backend

---

## 🧪 How to Run Locally

### 1. Clone the repo:
```bash
git clone https://github.com/yzhyhaliuk/Chatrooms-App.git
cd Chatrooms-App
```
### 2. Install dependencies:
📦 Client:
```bash
cd client
npm install
```
🔌 Server:
```bash
cd server
npm install
```

### 3. Add .env files:
🧪 On client (client/.env):
VITE_SERVER_URL=ws://localhost:5000

⚙️ On server:
PORT=5000

### 4. Run both apps:
🖥️ Server:
```bash
cd server
node src/index.js
```
💻 Client:
```bash
cd client
npm run dev
```

## 🌍 Deployment (Render)
- Backend deployed on Render using Node server with WebSocket
- Frontend deployed separately using Vite static build
- Environment variable for VITE_SERVER_URL set in client settings on Render