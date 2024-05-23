//Taking the elements from the html
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("getResume");

async function sendEmail() {
  console.log("Sending email");

  const subject = "Steven resume";
  //const values of the email request
  const requestBody = {
    subject: subject,
    message: message.value,
    to: email.value,
    name: name.value,
  };

  try {
    const response = await fetch(
      "https://prod-47.eastus.logic.azure.com:443/workflows/c232366a52454c48867a6a46c447b2e4/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=76eU-RogmPhdBbhT4yH7l9ZRt6MJft7DenAkZL3KZbY",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(requestBody),
      }
    );

    const responseContent = await response.json();
    console.log(responseContent);

    console.log("Email sent successfully");
  } catch (error) {
    console.log(error);
  }
}

submit.addEventListener("click", sendEmail);
