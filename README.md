# 🎯 InterviewIQ.AI

> An AI-powered mock interview platform that conducts realistic technical interviews based on the candidate's resume and provides detailed performance analysis with AI-generated feedback.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react">
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js">
  <img src="https://img.shields.io/badge/MongoDB-Database-darkgreen?logo=mongodb">
  <img src="https://img.shields.io/badge/Google-Gemini-red?logo=google">
  <img src="https://img.shields.io/badge/License-MIT-blue">
</p>

---

## 🚀 Live Demo

🌐 **Frontend:** https://YOUR_CLIENT_RENDER_LINK

⚙️ **Backend API:** https://YOUR_SERVER_RENDER_LINK

---

# 📖 Overview

InterviewIQ.AI is an intelligent interview preparation platform that simulates real technical interviews using Google's Gemini AI.

Users upload their resume, choose interview preferences, and participate in an AI-driven interview where questions are dynamically generated according to their skills and experience.

After the interview, the application evaluates the candidate's performance and generates detailed feedback, including communication skills, confidence level, technical accuracy, and an overall interview score.

The goal is to help students and professionals prepare for real interviews with personalized AI feedback.

---

# ✨ Features

- 🤖 AI-generated interview questions
- 📄 Resume upload
- 🎤 Voice-based interview interaction
- ⏱️ Interview timer
- 📊 AI-generated interview report
- 📈 Performance analytics
- ⭐ Confidence score
- 💬 Communication analysis
- 📝 Technical feedback
- 👤 User Authentication
- 📚 Interview History
- 🌙 Responsive UI
- 🔒 Secure authentication using JWT

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Axios
- Framer Motion
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer
- Google Gemini API

## Database

- MongoDB Atlas

## Deployment

- Render

---

# 📂 Project Structure

```
InterviewIQ.AI
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── assets
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── utils
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/InterviewIQ.AI.git
```

```bash
cd InterviewIQ.AI
```

---

## 2. Install Client Dependencies

```bash
cd client
npm install
```

---

## 3. Install Server Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

Create another `.env` file inside the **client** folder.

```env
VITE_SERVER_URL=http://localhost:8000
```

---

# ▶️ Running Locally

## Start Backend

```bash
cd server
npm run dev
```

Backend runs on

```
http://localhost:8000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 📡 API Overview

## Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

---

## Interview

```
POST /api/interview/create

POST /api/interview/start

POST /api/interview/submit-answer

POST /api/interview/finish

GET /api/interview/history
```

---

## AI Evaluation

- Resume analysis
- AI question generation
- Technical scoring
- Confidence scoring
- Communication analysis
- Overall interview report

---

# 📊 Workflow

```
User Login
      │
      ▼
Upload Resume
      │
      ▼
Generate AI Questions
      │
      ▼
Voice Interview
      │
      ▼
Submit Answers
      │
      ▼
Gemini AI Evaluation
      │
      ▼
Detailed Performance Report
```

---

# 📷 Screenshots

## Home

```
Add Screenshot Here
```

---

## Dashboard

```
Add Screenshot Here
```

---

## Interview Page

```
Add Screenshot Here
```

---

## AI Report

```
Add Screenshot Here
```

---

# 🎯 Future Improvements

- Video interview support
- AI avatar interviewer
- Multi-language interviews
- Company-specific interview rounds
- Coding interview integration
- HR interview mode
- Resume improvement suggestions
- Leaderboard
- Interview sharing
- Email interview reports

---

# 👩‍💻 Author

**Vedika Singh**

GitHub:
https://github.com/vedikasingh2445-ai

LinkedIn:
https://linkedin.com/in/YOUR_LINKEDIN

LeetCode:
https://leetcode.com/u/vedika_25_/

---

# ⭐ Support

If you like this project,

⭐ Star the repository

🍴 Fork it

🛠️ Contribute to improve InterviewIQ.AI

---

# 📜 License

This project is licensed under the MIT License.

```
MIT License © 2026 Vedika Singh
```
