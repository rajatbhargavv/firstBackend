# Node.js Learning — Code With Harry

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-yellow?logo=javascript)
![Status](https://img.shields.io/badge/Status-In%20Progress-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> Personal notes, experiments, and code snippets from the **Code With Harry – Node.js** course.

---

## 📌 About This Repository

This repository documents my journey of learning **Node.js** — from understanding what a runtime environment is, to building servers with the HTTP module and Express. It serves as a reference for concepts, syntax, and patterns I've picked up along the way.

---

## 📑 Table of Contents

- [Why Node.js?](#-why-nodejs)
- [What is Backend?](#-what-is-backend)
- [Modules in Node.js](#-modules-in-nodejs)
- [Importing Modules](#-importing-modules)
- [Event-Driven Architecture](#-event-driven-architecture)
- [HTTP Module](#-http-module)
- [Why Express?](#-why-express)
- [What I Can Build Now](#-what-i-can-build-now)
- [Topics Covered](#-topics-covered)

---

## 🤔 Why Node.js?

Before Node.js, developers had to use **different languages for the frontend and backend**:

| Layer    | Language         |
|----------|------------------|
| Frontend | JavaScript       |
| Backend  | PHP / Python / Java |

Node.js solves the **two-language problem** by allowing JavaScript to run **outside the browser**, enabling full-stack development with a single language.

With Node.js, JavaScript can:
- Access the file system
- Run on servers
- Interact with databases and the OS
- Build real-time and networked applications

---

## 🏗 What is Backend?

The **frontend** is everything a user sees — buttons, forms, layouts.  
The **backend** is the logic that powers it — processing requests, querying databases, and sending responses.

**Backend responsibilities include:**
- Authentication & authorization
- Data processing and validation
- Database operations (CRUD)
- Exposing REST APIs

---

## 📦 Modules in Node.js

Modules are files containing **related functions or logic** that can be imported and reused — keeping code organized and easy to debug.

### Types of Modules

| Type           | Description                              | Examples             |
|----------------|------------------------------------------|----------------------|
| Built-in       | Shipped with Node.js                     | `fs`, `path`, `os`, `http` |
| User-defined   | Created by the developer                 | `utils.js`, `helpers.js` |
| Third-party    | Installed via npm                        | `express`, `mongoose` |

---

## 📥 Importing Modules

### CommonJS (older style)
```js
const fs = require("fs");
```

### ES Modules (modern style)
```js
import fs from "fs";
```

### Named vs Default Exports

```js
// Named export — multiple exports per file
export const name = "Rajat";

// Default export — only one per file
export default function greet() { ... }
```

```js
// Importing named export
import { name } from "./file.js";

// Importing default export
import greet from "./file.js";
```

> ⚠️ **Note:** When using ES Modules (`import`), `__filename` and `__dirname` are **not available** by default. Use `import.meta.url` to derive them manually.

---

## ⚡ Event-Driven Architecture

Node.js is **non-blocking** — it doesn't pause execution while waiting for a slow task (like file reading or a DB query). Instead, it moves on and runs a **callback** when the task completes.

### Blocking vs Non-Blocking

```
// ❌ Blocking
Start file read → wait... → finish → continue

// ✅ Node.js Non-Blocking
Start file read → continue other tasks → file ready → callback fires
```

This is what makes Node.js capable of handling **many concurrent requests** efficiently.

---

## 🌐 HTTP Module

The built-in `http` module lets you create a web server that listens for requests and sends responses.

```js
import http from "http";

const server = http.createServer((req, res) => {
  res.end("Hello from Node.js server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

**How it works:**

```
Browser → HTTP Request → Node.js Server → HTTP Response → Browser
```

| Method              | Purpose                         |
|---------------------|---------------------------------|
| `http.createServer` | Creates the server instance     |
| `req`               | Incoming request from the client|
| `res`               | Outgoing response to the client |
| `res.end()`         | Sends data back to the browser  |

---

## 🚀 Why Express?

While the `http` module works, it requires a lot of boilerplate. **Express.js** is a minimal framework that simplifies everything.

```js
// With Express — clean and readable
app.get("/users", (req, res) => {
  res.send("Users Page");
});
```

**Express advantages:**
- Simplified and readable routing
- Middleware support
- Less boilerplate
- Large ecosystem of plugins

---

## 🛠 What I Can Build Now

After completing this course, I'll be able to build:

- ✅ REST APIs
- ✅ Authentication systems (JWT, sessions)
- ✅ Real-time chat applications
- ✅ Backend for mobile apps
- ✅ Full-stack MERN applications

---

## 📚 Topics Covered

- [x] Runtime environment & how Node.js works
- [x] Built-in, user-defined, and third-party modules
- [x] CommonJS vs ES Module imports
- [x] Named vs default exports
- [x] Event-driven, non-blocking architecture
- [x] HTTP module & creating a basic server
- [x] Introduction to Express.js
- [ ] File system (`fs`) module
- [ ] Routing with Express
- [ ] Middleware
- [ ] REST API design
- [ ] Database integration (MongoDB / Mongoose)

---

## 🙏 Acknowledgements

- Course by [**Code With Harry**](https://www.codewithharry.com/)
- [Node.js Official Docs](https://nodejs.org/en/docs)
- [Express.js Docs](https://expressjs.com/)

---

> 💡 *This repo is a learning log — expect it to grow as I progress through the course.*
