// Logout function
function logout() {
  localStorage.removeItem("userData"); // Clear user session
  alert("You have been logged out.");
  window.location.href = "login.html"; // Redirect to login page
}

// Delete Account function
function deleteAccount() {
  const confirmDelete = confirm(
    "Are you sure you want to delete your account? This action cannot be undone."
  );
  if (confirmDelete) {
    localStorage.clear(); // Clear all stored data
    alert("Your account has been deleted.");
    window.location.href = "signup.html"; // Redirect to signup page
  }
}

document
  .getElementById("profilePicInput")
  .addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
      localStorage.setItem("profilePic", reader.result);
      document.getElementById("profilePic").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });

// Load saved profile picture
document.addEventListener("DOMContentLoaded", function () {
  const savedPic = localStorage.getItem("profilePic");
  if (savedPic) {
    document.getElementById("profilePic").src = savedPic;
  }
});

const toggleButton = document.getElementById("darkModeToggle");

toggleButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// Load preference
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});
