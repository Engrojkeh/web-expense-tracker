function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Login failed: ' + error.message);
        });
}

function createAccount() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Erreur: ' + error.message);
        });
}