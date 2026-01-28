Sweet project 👌 This is a **Job Card Listing App** — let’s make a clean, professional README for it.

You can paste this into your `README.md`.

---

# 💼 Job Cards Listing App

A React-based job listing UI that displays multiple job openings in beautifully structured **card components**.

This project demonstrates **component reusability**, **props handling**, and **dynamic rendering using map()** in React.

---

## 🚀 Features

* Displays job openings in card format
* Reusable **Card component**
* Dynamic rendering using JavaScript `.map()`
* Company logos, roles, pay, and tags shown clearly
* Clean and responsive layout

---

## 🛠 Tech Stack

* ⚛️ React
* ⚡ Vite
* 🟨 JavaScript (ES6+)
* 🎨 CSS

---

## 📂 Project Structure

```
src
 ┣ components
 ┃ ┗ Card.jsx
 ┣ App.jsx
 ┣ main.jsx
```

---

## 🧠 How It Works

Job data is stored in an array inside `App.jsx`, and each job object is passed as props to the `Card` component.

```js
{jobOpenings.map((elem, idx) => (
  <Card
    key={idx}
    company={elem.companyName}
    datePosted={elem.datePosted}
    post={elem.post}
    tag1={elem.tag1}
    tag2={elem.tag2}
    pay={elem.pay}
    brandLogo={elem.brandLogo}
  />
))}
```

This allows the UI to update automatically whenever new jobs are added to the array.

---

## ▶️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/abhiav-spec/React_projects.git
```

### 2️⃣ Go to project folder

```bash
cd card
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start development server

```bash
npm run dev
```

Open 👉 **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 📸 Preview

Job cards display:

* 🏢 Company Name
* 💼 Job Role
* 🕒 Date Posted
* 🏷 Job Type & Level
* 💰 Pay Rate
* 🖼 Company Logo

---

## 🎯 Learning Goals

This project helps practice:

* React props
* Component reuse
* Rendering lists with `.map()`
* Structuring real-world UI data

---

## 👨‍💻 Author

**Abhinav Mishra**

---

