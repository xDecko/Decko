
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


  //Text animation

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//circles

function handleHover() {
  var circles = document.getElementsByClassName("circles");
  var images = document.getElementsByClassName("image");

  for (var i = 0; i < circles.length; i++) {
      // Utilizar setTimeout para agregar un retraso a cada objeto
      (function(index) {
          setTimeout(function() {
              circles[index].classList.toggle("hover");
          }, index * 0); // Cambia el valor 200 por el retraso deseado (en milisegundos)
      })(i);
  }

  for (var j = 0; j < images.length; j++) {
      // Utilizar setTimeout para agregar un retraso a cada objeto
      (function(index) {
          setTimeout(function() {
              images[index].classList.toggle("yolo");
          }, index * 0); // Cambia el valor 200 por el retraso deseado (en milisegundos)
      })(j);
  }
}



