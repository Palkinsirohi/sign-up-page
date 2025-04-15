document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const form = e.target;
    const msg = document.getElementById("msg");
  
    msg.textContent = "Sending...";
    msg.style.color = "#444";
  
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData
    });
  
    const result = await response.json();
  
    if (result.success) {
      msg.textContent = "Form submitted successfully!";
      msg.style.color = "green";
      form.reset();
    } else {
      msg.textContent = "Submission failed. Please try again!";
      msg.style.color = "red";
    }
  });