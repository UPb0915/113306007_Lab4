document.querySelectorAll(".drum").forEach(button => {
 
      button.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        animateButton(buttonInnerHTML);
      });
  });


  document.addEventListener("keydown", function (event) {
    const key = event.key;
    playSound(key);
    animateButton(key);
  });


  function playSound(key) {
  
  let sound;

    switch (key) {
      case "w":
        sound = new Audio("sounds/crash.mp3");
        break;
      case "a":
        sound = new Audio("sounds/kick-bass.mp3");
        break;
      case "s":
        sound = new Audio("sounds/snare.mp3");
        break;
      case "d":
        sound = new Audio("sounds/tom-1.mp3");
        break;
      case "j":
        sound = new Audio("sounds/tom-2.mp3");
        break;
      case "k":
        sound = new Audio("sounds/tom-3.mp3");
        break;
      case "l":
        sound = new Audio("sounds/tom-4.mp3");
    }

    sound.play();
  }


  function animateButton(key) {
    const activeButton = document.querySelector("." + key);

    if (activeButton) {
      activeButton.classList.add("pressed");
      setTimeout(() => {
      activeButton.classList.remove("pressed");
      }, 100);
    }
  }
