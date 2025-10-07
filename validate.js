function validateForm() {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let error = document.getElementById("error");

  // Reset error message
  error.textContent = "";

  // Check empty fields
  if (!username || !email || !phone || !password || !confirmPassword) {
    error.textContent = "All fields are required!";
    return false;
  }

  // Validate phone number
  if (!/^[0-9]{10}$/.test(phone)) {
    error.textContent = "Phone number must be 10 digits (numbers only).";
    return false;
  }

  // Validate email using regex
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z]{3,}\.[A-Za-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Invalid email format.";
    return false;
  }

  // Validate password complexity
  const passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
  if (!passPattern.test(password)) {
    error.textContent = "Password must be at least 7 characters with 1 capital letter, 1 number & 1 special char (&,$,#,@).";
    return false;
  }

  // Confirm password match
  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return false;
  }

  alert("Registration successful!");
  return true;
}
