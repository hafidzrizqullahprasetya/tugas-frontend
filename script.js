const popup = document.querySelector(".popup");
const shareButton = document.querySelector(".share-button");
const shareButtonImage = document.getElementById("share-button-img");

// Hide popup initially
popup.classList.add("hidden");

// Track click events on share button
shareButton.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent document click from being triggered
  togglePopup();
});

function togglePopup() {
  if (popup.classList.contains("hidden")) {
    // Show popup
    popup.classList.remove("hidden");
    
    // Change button style
    shareButton.classList.remove("share-button");
    shareButton.classList.add("active-share-button-desktop");
    shareButtonImage.src = "images/white-icon-share.svg";
  } else {
    // Hide popup
    popup.classList.add("hidden");
    
    // Reset button style
    setTimeout(() => {
      shareButton.classList.add("share-button");
      shareButton.classList.remove("active-share-button-desktop");
      shareButtonImage.src = "images/icon-share.svg";
    }, 300);
  }
}

// Close popup when clicking outside
document.addEventListener("click", function(event) {
  // Only handle outside clicks when popup is visible
  if (!popup.classList.contains("hidden")) {
    const isClickInside = popup.contains(event.target) || 
                         shareButton.contains(event.target);
    
    if (!isClickInside) {
      popup.classList.add("hidden");
      
      setTimeout(() => {
        shareButton.classList.add("share-button");
        shareButton.classList.remove("active-share-button-desktop");
        shareButtonImage.src = "images/icon-share.svg";
      }, 300);
    }
  }
});