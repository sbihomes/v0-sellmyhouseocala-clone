document.addEventListener("DOMContentLoaded", () => {
  // Form submission
  const form = document.getElementById("property-form")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const phone = document.getElementById("phone").value
      const email = document.getElementById("email").value
      const address = document.getElementById("address").value
      const condition = document.querySelector('input[name="condition"]:checked').value
      const timeframe = document.getElementById("timeframe").value
      const message = document.getElementById("message").value

      // Here you would typically send this data to your server or email
      // For now, we'll just show an alert
      alert("Thank you for your submission! We will contact you shortly.")

      // Reset the form
      form.reset()

      // You can replace this with your actual form submission code
      // Example:
      // fetch('/submit-form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name, phone, email, address, condition, timeframe, message
      //   }),
      // })
      // .then(response => response.json())
      // .then(data => {
      //   alert('Thank you for your submission! We will contact you shortly.');
      //   form.reset();
      // })
      // .catch(error => {
      //   console.error('Error:', error);
      //   alert('There was an error submitting your form. Please try again.');
      // });
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: "smooth",
        })
      }
    })
  })
})
