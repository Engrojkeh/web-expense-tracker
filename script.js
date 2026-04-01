function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if(!email || !password) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            alert('Connexion échouée : ' + error.message);
        });
}

function createAccount() {
    const fullname = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if(!fullname || !email || !password) {
        alert("Veuillez remplir tous les champs !");
        return;
    }
    
    const btn = document.querySelector('#signupForm button');
    const oldText = btn.innerHTML;
    btn.innerHTML = "Création en cours...";
    btn.disabled = true;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Update profile with full name
            return user.updateProfile({
                displayName: fullname
            }).then(() => {
                // Immediately sign out to force manual login
                return firebase.auth().signOut().then(() => {
                    alert('Compte créé avec succès ! Veuillez vous connecter avec votre nouveau compte.');
                    
                    // Reset form and UI
                    btn.innerHTML = oldText;
                    btn.disabled = false;
                    document.getElementById('loginEmail').value = email; // Convenience fill
                    document.getElementById('loginPassword').value = '';
                    document.getElementById('signupPassword').value = '';
                    toggleAuthMode('login');
                });
            });
        })
        .catch((error) => {
            alert('Erreur: ' + error.message);
            btn.innerHTML = oldText;
            btn.disabled = false;
        });
}

function toggleAuthMode(mode) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authSubtitle = document.getElementById('authSubtitle');
    
    if (mode === 'signup') {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        authSubtitle.innerText = "Créez votre compte pour commencer.";
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
        authSubtitle.innerText = "Gérez vos finances avec élégance.";
    }
}