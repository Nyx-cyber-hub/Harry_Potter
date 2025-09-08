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
    alert("Welcome to Hogwarts, " + username + "!");
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

// Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const registerBtn = document.getElementById("registerBtn");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (btn.dataset.tab === "login") {
      loginTab.classList.remove("hidden");
      registerTab.classList.add("hidden");
    } else {
      registerTab.classList.remove("hidden");
      loginTab.classList.add("hidden");
    }
  });
});

// Register (fake demo)
registerBtn.addEventListener("click", () => {
  const regUser = document.getElementById("regUsername").value;
  const regEmail = document.getElementById("regEmail").value;
  const regPass = document.getElementById("regPassword").value;

  if (regUser && regEmail && regPass) {
    alert("Account created for " + regUser + "!");
    // Optional: switch to login tab
    tabBtns[0].click();
  } else {
    alert("Please fill all fields.");
  }
});

function showMessage(message) {
  const msgBox = document.createElement("div");
  msgBox.className = "message-box";
  msgBox.innerText = message;

  document.body.appendChild(msgBox);

  setTimeout(() => {
    msgBox.remove();
  }, 3000);
}

// Custom message function
function showMessage(message) {
  const msgBox = document.createElement("div");
  msgBox.className = "message-box";
  msgBox.innerText = message;

  document.body.appendChild(msgBox);

  setTimeout(() => {
    msgBox.remove();
  }, 3000); // mawawala after 3 seconds
}

// Palitan ang alert sa login
loginBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    showMessage("Welcome to Hogwarts, " + username + "!");
    loginModal.style.display = "none";
    signInBtn.style.display = "none";
    signOutBtn.style.display = "inline-block";
  } else {
    showMessage("Please enter your username and password.");
  }
});

// Palitan din sa sign out
signOutBtn.addEventListener("click", () => {
  showMessage("You have signed out.");
  signOutBtn.style.display = "none";
  signInBtn.style.display = "inline-block";
});

