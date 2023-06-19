//Audio
document.addEventListener('DOMContentLoaded', function () {
  var audio = document.getElementById('miAudio');
  var isPlaying = false;

  document.body.addEventListener('mouseover', function () {
    if (!isPlaying) {
      audio.volume = 0.05;
      try {
        audio.play();
        isPlaying = true;
      } catch (error) {
        console.log("La reproducción automática del audio fue bloqueada por el navegador.");
      }
    }
  });

  document.body.addEventListener('click', function () {
    if (isPlaying) {
      audio.muted = true;
      isPlaying = false;
    } else {
      audio.volume = 0.05;
      audio.muted = false;
      isPlaying = true;
    }
  });
});





//CURSOR LIGHT

window.onpointermove = event => {
  const { clientX, clientY } = event;

  glow.style.left = `${clientX}px`; /* Utiliza 'style.left' en lugar de 'animate' */
  glow.style.top = `${clientY}px`; /* Utiliza 'style.top' en lugar de 'animate' */
};

//LIGHT EFFECTS

function changeGlowSize() {
  var glow = document.getElementById("glow");
  glow.classList.remove("reset");
  glow.classList.add("hover");
}

function resetGlowSize() {
  var glow = document.getElementById("glow");
  glow.classList.remove("hover");
  glow.classList.add("reset");
}








  //fullscreen

  function toggleFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
      document.documentElement.msRequestFullscreen();
    }
  }
