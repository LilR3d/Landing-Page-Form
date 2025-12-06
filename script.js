function saveData() {
  const nameValue = document.getElementById("nameInput").value;
  const emailValue = document.getElementById("emailInput").value;
  const messageValue = document.getElementById("messageInput").value;

  const contactData = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  };

  console.log(contactData);
}
