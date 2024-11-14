function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password === "password123") {
        errorMessage.style.color = "green";
        errorMessage.innerText = "Login successful!";
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        errorMessage.innerText = "Invalid username or password";
    }
}

function forgotPassword() {
    document.getElementById("forgotPasswordModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("forgotPasswordModal").style.display = "none";
    document.getElementById("recovery-message").innerText = ""; 
    document.getElementById("recoveryEmail").value = ""; 
}

function sendRecoveryEmail() {
    const recoveryEmail = document.getElementById("recoveryEmail").value;
    const recoveryMessage = document.getElementById("recovery-message");

    if (recoveryEmail) {
        recoveryMessage.style.color = "green";
        recoveryMessage.innerText = "Recovery email sent!";
        setTimeout(closeModal, 1500); 
    } else {
        recoveryMessage.style.color = "red";
        recoveryMessage.innerText = "Please enter a valid email.";
    }
}

// Initialize Google Sign-In
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    alert(`Welcome ${data.name}! You have successfully logged in with Google.`);
    window.location.href = "dashboard.html"; 
}

// Render the Google Sign-In button
window.onload = function() {
    google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt(); // Display the One Tap prompt
};
