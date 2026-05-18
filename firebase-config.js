// firebase-config.js
// Firebase client keys are public by design for frontend apps.
// Security is enforced via Firestore Rules + API key domain restrictions.
// See: https://firebase.google.com/docs/projects/api-keys

const firebaseConfig = {
    apiKey: "AIzaSyBPtGqa0vRx_Rdrenb79N_PdGo1gnw9BF0",
    authDomain: "web-expense-tracker-787aa.firebaseapp.com",
    projectId: "web-expense-tracker-787aa",
    storageBucket: "web-expense-tracker-787aa.firebasestorage.app",
    messagingSenderId: "824955298078",
    appId: "1:824955298078:web:7ab36cad229b150bcba90f",
    measurementId: "G-B8CWER4ECE"
};

firebase.initializeApp(firebaseConfig);
