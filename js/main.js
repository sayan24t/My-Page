document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("cta-btn");

  if (btn) {
    btn.addEventListener("click", () => {
      alert("You clicked the button 🚀");
    });
  }
});
