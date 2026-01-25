# EMS-React

![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-4.3.9-green) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)  

**EMS-React** is a web application built with **React** and **Vite** that allows employees to manage tasks and admins to monitor them efficiently. It provides a secure login, an employee dashboard for creating tasks, and an admin dashboard to manage all tasks.

---

## 📝 Features

- **Login System**  
  Employees log in with their credentials to access the dashboard.  

- **Employee Dashboard**  
  - View assigned tasks  
  - Create new tasks  
  - Tasks automatically sent to the admin dashboard  

- **Admin Dashboard**  
  - View all tasks submitted by employees  
  - Track task status (active, completed, failed, etc.)  

- **Fast Development Setup**  
  - Built with **Vite** for fast development  
  - Hot Module Replacement (HMR) for quick UI updates  

- **Code Quality**  
  - ESLint rules included  
  - Optional TypeScript integration for type safety  

---

## 🛠 Tech Stack

- **Frontend:** React, Vite  
- **Styling:** Tailwind CSS (if used)  
- **State Management:** React Hooks / Context API  
- **Routing:** React Router (if used)  
- **Backend:** Optional / Local storage  

---

## 🚀 Project Setup

1. **Clone the repository**
```bash
git clone https://github.com/solankitanu532/ems-react.git
cd ems-react

## Folder Structure
ems-react/
│
├─ public/          # Static assets like images, icons
├─ src/
│   ├─ components/  # Reusable React components
│   ├─ pages/       # Employee & Admin dashboards, Login page
│   ├─ context/     # React Context for state management
│   ├─ App.jsx
│   └─ main.jsx
├─ package.json
└─ vite.config.js

