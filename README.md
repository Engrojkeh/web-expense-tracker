# Dépenses Bénin (Benin Expenditure Tracker)

A modern, responsive, and beautifully designed web application for tracking daily expenses and managing monthly budgets, tailored for users in Benin.

## 🚀 Features

- **Authentication System:** Secure email & password auth powered by Firebase.
- **Budget Management:** Set a monthly budget in XOF (CFA Franc) and track remaining/spent amounts dynamically.
- **Multi-Currency Conversion:** Instantly view equivalent totals in USD, EUR, and NGN using real-time exchange rates (ExchangeRate-API).
- **Expense Categorization:** Tag expenses by category (e.g., Food, Transport, Energy) with insightful emoji indicators.
- **Visual Analytics:** Interactive doughnut charts (Chart.js) detailing spending distribution across categories.
- **Mobile Responsive:** Elegant UI/UX that adapts perfectly to desktop, tablet, and mobile layouts.
- **MoMo Synchronization (Simulation):** Built-in utility to simulate bulk syncing transactions from MTN Mobile Money.

## 🛠️ Technology Stack

- **Frontend:** HTML5, Vanilla JavaScript, CSS3 (Glassmorphism & CSS Grid)
- **Backend/Database:** Firebase (Auth & Cloud Firestore)
- **Data Visualization:** Chart.js
- **Third-Party APIs:** ExchangeRate-API (Currency rates)

## 📦 Local Setup & Deployment

1. **Clone the project:**
   ```bash
   git clone <your-new-repo-url>
   cd web-expense-tracker
   ```
2. **Serve locally:**
   You can use any local HTTP server. For example:
   - VS Code Live Server extension
   - Python: `python -m http.server 5500`
   - Node.js: `npx serve .`

## 🔒 Security Protocols

We have taken several measures to ensure the integrity and security of the application:
1. **Content Security Policy (CSP):** Strict CSP meta headers have been implemented on all pages to prevent Cross-Site Scripting (XSS), data injection, and other malicious vulnerability attacks.
2. **Secure Firebase Queries:** Firestore transactions require authentication (`userId`) and are tracked securely.
3. **API Key Security Protocol (Action Required):** 
   *While the Firebase configs are placed in the frontend code, you must secure your Firestore Database and Firebase Auth endpoints.* 
   Go to your Firebase Console -> Firestore Database -> Rules, and ensure you use rigorous security rules:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Only allow logged in users to read and write their OWN expenses/budget
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
   *Similarly, use Google Cloud Console to restrict your Firebase `apiKey` to your specific production domain / localhost ports.*

## 📄 License
Project de Fin d'Études - Farinre Gideon. All rights reserved.
