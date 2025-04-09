document.addEventListener("DOMContentLoaded", function () {
    const tutorialItems = document.querySelectorAll(".tutorial-item");
    const tutorialImages = document.querySelectorAll(".tutorial-container > img");

    tutorialItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove active class from all items
            tutorialItems.forEach(el => el.classList.remove("active"));

            // Add active class to the clicked item
            this.classList.add("active");

            // Get the id of the active item
            const activeId = this.id;

            // Loop through all images and toggle their visibility
            tutorialImages.forEach(img => {
                if (img.id === activeId) {
                    img.style.display = "block";
                } else {
                    img.style.display = "none";
                }
            });
        });
    });

    document.querySelector(".tutorial-item.active")?.click();
});