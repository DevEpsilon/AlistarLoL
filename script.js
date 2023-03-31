document.addEventListener("DOMContentLoaded", function() {
    var backgroundVideo = document.getElementById("background-video");
    var enableAudioButton = document.getElementById("enable-audio");
    var volumeControl = document.getElementById("volume-control");
    var volumeSlider = document.getElementById("volume-slider");
  
    enableAudioButton.addEventListener("click", function() {
      backgroundVideo.muted = false;
      enableAudioButton.style.display = "none";
      volumeControl.classList.remove("hidden");
      backgroundVideo.volume = volumeSlider.value / 100;
    });
  
    volumeSlider.addEventListener("input", function() {
      backgroundVideo.volume = volumeSlider.value / 100;
    });
  });
  