# Dépenses Bénin — Expense Tracker

> A modern web app for tracking daily expenses and managing monthly budgets, tailored for West African users.

## 🔗 Live Demo
**[engrojkeh.github.io/web-expense-tracker](https://engrojkeh.github.io/web-expense-tracker)**

[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)
[![Firebase](https://img.shields.io/badge/Backend-Firebase-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📸 Screenshots

| Login | Dashboard | Add Expense |
|---|---|---|
| ![Login](assets/hero-login.png) | ![Dashboard](assets/hero-add.jpg) | ![Add](assets/logo.jpg) |

---

## About

Dépenses Bénin is a frontend expense tracking web application built for users in Benin and the wider West Africa region. It supports XOF (CFA Franc) as the primary currency with real-time conversion to USD, EUR, and NGN. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, just clean web fundamentals.

---

## Features

- 🔐 Secure email & password authentication via Firebase Auth
- 💰 Monthly budget management in XOF (CFA Franc)
- 🌍 Real-time multi-currency conversion — USD, EUR, NGN
- 🏷️ Expense categorization with emoji indicators (Food, Transport, Energy, etc.)
- 📊 Interactive doughnut charts for spending distribution (Chart.js)
- 📱 Fully responsive — desktop, tablet, and mobile
- 📲 MoMo Sync simulation — bulk import of MTN Mobile Money transactions

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, Vanilla JavaScript, CSS3 (Glassmorphism + CSS Grid) |
| Auth & Database | Firebase Authentication + Cloud Firestore |
| Data Visualization | Chart.js |
| Currency Rates | ExchangeRate-API |

---

## Getting Started

### Prerequisites

- A Firebase project (free Spark plan works)
- Any local HTTP server (VS Code Live Server, Python, or Node)

### 1. Clone the repo

```bash
git clone https://github.com/Engrojkeh/web-expense-tracker.git
cd web-expense-tracker
```

### 2. Configure Firebase

Replace the Firebase config object in `index.html`, `dashboard.html`, and `add-expense.html` with your own project credentials from the Firebase Console.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```

### 3. Set Firestore security rules

In Firebase Console → Firestore → Rules, apply these rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /expenses/{expenseId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null;
    }
    match /budgets/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 4. Restrict your API key

In Google Cloud Console → APIs & Services → Credentials, restrict your Firebase API key to your domain only. See the [Firebase security docs](https://firebase.google.com/docs/projects/api-keys) for details.

### 5. Serve locally

```bash
# Python
python -m http.server 5500

# or Node.js
npx serve.
```

Then open `http://localhost:5500` in your browser.

---

## Project Structure

```
web-expense-tracker/
├── assets/               # Images and static media
│   ├── hero-login.png
│   ├── hero-add.jpg
│   └── logo.jpg
├── index.html            # Login/landing page
├── dashboard.html        # Main dashboard with charts
├── add-expense.html      # Add expense form
├── script.js             # Core app logic
├── style.css             # Global styles
├── .gitignore
└── README.md
```

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Author

**Engrojkeh** — Connect on [GitHub](https://github.com/Engrojkeh)
