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

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Check if the URL has a hash value
  if (window.location.hash) {
    // Get the section ID from the URL hash
    var sectionId = window.location.hash.substring(1);
    
    // Scroll to the section with the corresponding ID
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView();
    }
  }
});
