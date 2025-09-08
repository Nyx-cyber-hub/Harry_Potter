const signInBtn = document.getElementById("signInBtn");
const signOutBtn = document.getElementById("signOutBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");
const loginBtn = document.getElementById("loginBtn");

// Open modal
signInBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

// Close modal
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Login
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    alert("Welcome, " + username + "!");
    loginModal.style.display = "none";
    signInBtn.style.display = "none";
    signOutBtn.style.display = "inline-block";
  } else {
    alert("Please enter username and password.");
  }
});

// Sign Out
signOutBtn.addEventListener("click", () => {
  alert("You have signed out.");
  signOutBtn.style.display = "none";
  signInBtn.style.display = "inline-block";
});
