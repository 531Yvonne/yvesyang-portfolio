(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Navigate to specific section based on url tail 
document.addEventListener('DOMContentLoaded', () => {
  const tail = window.location.hash.substring(1); // Exclude the "#" character
  const section = document.getElementById(tail);
  if (section) {
    section.scrollIntoView();
  }
});
