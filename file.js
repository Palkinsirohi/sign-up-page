const form = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const bottomMsg = document.getElementById("bottom-msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const result = await response.json();

  if (result.success) {
    // Show toast
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);

    // Show bottom message
    bottomMsg.textContent = "Form submitted successfully!";
    bottomMsg.style.color = "green";
    
    form.reset();
  } else {
    bottomMsg.textContent = "Submission failed. Please try again!";
    bottomMsg.style.color = "red";
  }
});
