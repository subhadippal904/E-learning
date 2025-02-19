const toggleForm = () => {
    const formTitle = document.getElementById("formTitle");
    const nameField = document.getElementById("nameField");
    const toggleText = document.getElementById("toggleText");

    if (formTitle.innerText === "Register") {
        formTitle.innerText = "Login";
        nameField.style.display = "none";
        toggleText.innerHTML = "Don't have an account? <a href='#' onclick='toggleForm()'>Register</a>";
    } else {
        formTitle.innerText = "Register";
        nameField.style.display = "block";
        toggleText.innerHTML = "Already have an account? <a href='#' onclick='toggleForm()'>Login</a>";
    }
};
