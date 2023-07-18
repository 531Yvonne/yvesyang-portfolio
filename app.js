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

function navigateToSection() {
    const hash = window.location.hash.substr(1); // Get the hash part of the URL without the "#" symbol
    const targetSection = document.getElementById(hash);
    if (targetSection) {
        // If the section with the specified hash exists, activate it
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(`[data-id="${hash}"]`).classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        targetSection.classList.add("active");
    } else {
        // If the specified section doesn't exist, activate the default section (e.g., home)
        const defaultSection = document.getElementById("home");
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(`[data-id="home"]`).classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        defaultSection.classList.add("active");
    }
}

// Add an event listener to the window to detect when the hash changes (manually adding tail to URL)
window.addEventListener("hashchange", navigateToSection);

// Call the navigation function once on page load to handle initial navigation
window.addEventListener("load", navigateToSection);