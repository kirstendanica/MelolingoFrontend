// Define URL for API
const BASE_URL = "http://localhost:8080/api";

// Define an object for user with methods for API endpoint interaction
const User = {
  // Login
  login: function (username, password) {
    return fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  },

  // Get all users
  getAllUsers: function () {
    return fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  },

  // Register new user account
  registerNewUserAccount: function (username, password) {
    return fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error));
  },
};

// SAMPLE OF METHODS IN USE
User.login("your_username", "your_password").then((data) => console.log(data));
User.getAllUsers().then((users) => console.log(users));
User.registerNewUserAccount("new_username", "new_password").then((data) =>
  console.log(data)
);

// Toggling dark mode
const checkBox = document.getElementById('switch');
checkBox.addEventListener('change', () => {
   document.body.classList.toggle('dark-theme');
});

