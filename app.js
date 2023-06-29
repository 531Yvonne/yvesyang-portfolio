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

// Update the link to include the sectionId at the tail of the URL
const controls = document.querySelectorAll('.control');
controls.forEach(control => {
  control.addEventListener('click', () => {
    const sectionId = control.getAttribute('data-id');
    window.location.href = window.location.href.split('#')[0] + '#' + sectionId;
  });
});
