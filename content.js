// Function to mute ads
function muteAds() {
  const video = document.querySelector("video"); // Select the video element
  const adOverlay = document.querySelector(".ad-showing"); // Check for ad overlay

  if (video && adOverlay) {
    video.muted = true; // Mute the video if an ad is playing
    video.style.filter = "blur(10px)"; // Blur the video when an ad is playing
  } else if (video) {
    video.muted = false; // Unmute the video when no ads are playing
    video.style.filter = "none"; // Remove the blur when ads are not playing
  }
}

// ? this is currently not working, I think google put some wall to prevent ad blockers. tried with mouse event too
function skipAds() {
  // Select the button with the correct class
  const skipButton = document.querySelector(".ytp-skip-ad-button");

  // Check if the button exists and is visible
  if (
    skipButton &&
    skipButton.style.display !== "none" && // Ensure it's not hidden
    skipButton.style.opacity > 0 // Ensure it has some visibility
  ) {
    skipButton.click(); // Click the skip button
    console.log("Ad skipped!");
  } else {
    console.log("Failed to skip Ad from script");
  }
}

// Observe changes in the DOM for ads or skip buttons
const observer = new MutationObserver(() => {
  muteAds(); // Check if ads are playing and mute them
  skipAds(); // Check if the skip button is available and click it
});

// Start observing changes in the document body
observer.observe(document.body, {
  childList: true, // Watch for changes in child elements
  subtree: true, // Watch for changes in all descendant nodes
});
