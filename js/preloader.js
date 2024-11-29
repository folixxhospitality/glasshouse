  // Show full page after 5 seconds
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
      document.body.classList.remove("hidden");
    }, 5000); // 5-second preloader duration
  });
