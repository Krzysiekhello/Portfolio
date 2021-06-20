const submitButton = document.querySelector("[data-submitButton='submitButton']");
const userEmailInput = document.querySelector("[data-userEmail='userEmail']");
const userMessage = document.querySelector("[data-contactFormMessage='contactFormMessage']");
const snackbar = document.querySelector("[data-snackbar='snackbar']");
const snackbarText = document.querySelector("[data-snackbar='snackbar'] > p");

// Function which send emails and inform user that email has been sent or has not been sent after button click
const sendEmail = (e) => {
    e.preventDefault();
    const templateParameters = {
        from_name: userEmailInput.value,
        to_name: "krzysiekmakowka9@gmail.com",
        message: userMessage.value,
    }
    emailjs.send("service_qu5ip1a", "template_rxnhy0c", templateParameters, "user_UYosc9RWSNIDMYdEpRAgH")
        .then(() => {
            snackbar.style.display = "block";
            snackbar.style.bottom = 0 + "px";
            snackbar.style.backgroundColor = "#4caf50";
            snackbarText.innerText = "Email has been sent";
            setTimeout(() => {
                snackbar.style.bottom = -100 + "px";
            }, 2000);
            setTimeout(() => {
                snackbar.style.display = "none";
            },2200)
        })
        .catch(() => {
            snackbar.style.display = "block";
            snackbar.style.bottom = 0 + "px";
            snackbar.style.backgroundColor = "#bf360c";
            snackbarText.innerText = "Email has not been sent";
            setTimeout(() => {
                snackbar.style.bottom = -100 + "px";
            }, 2000);
            setTimeout(() => {
                snackbar.style.display = "none";
            },2200)
    })
    userEmailInput.value = "";
    userMessage.value = "";
}
submitButton.addEventListener("click", (e) => sendEmail(e));