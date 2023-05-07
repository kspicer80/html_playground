// Get the image element that we want to resize
var img = document.getElementById("image_test");

// Store the original size of the image
var originalWidth = img.width;
var originalHeight = img.height;

// Add a click event listener to the image
img.addEventListener("click", function() {
    // Double the image size
    img.style.width = img.width * 2 + "px";
    img.style.height = img.height * 2 + "px";
});

// Add a click event listener to the window
window.addEventListener("click", function(event) {
    // Check if the click target is the image
    if (event.target == img) {
    // Clicked on the image, do nothing
    } else {
    // Clicked outside the image, restore original size
    img.style.width = originalWidth + "px";
    img.style.height = originalHeight + "px";
    }
});