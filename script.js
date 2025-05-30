const reasons = [
    "You are not afraid to show the amount of love you have for the people in your life.",
    "You believe in me in ways I don't believe in myself.",
    "You are extremely selfless in order to make sure your family is happy.",
    "You are undoubtedly handsome and charismatic.",
    "You make time for our relationship all the time.",
    "You are my safe space, the one I can go to with anything and for everything.",
    "Your never ending humor never fails to put a smile on my face.",
    "You always push for me to communicate my feelings and to make sure I am alright.",
    "Your laugh!",
    "Your eyes glowing when they stare into mine."
  ];
  
  const reasonImages = [
    "images/reason1.jpg",
    "images/reason2.jpg",
    "images/reason3.jpg",
    "images/reason4.jpg",
    "images/reason5.jpg",
    "images/reason6.jpg",
    "images/reason7.jpg",
    "images/reason8.jpg",
    "images/reason9.jpg",
    "images/reason10.jpg"
  ];
  
  let shownReasons = [];
  let currentIndex = -1;

  function start() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");
  
    const music = document.getElementById("bg-music");
    music.volume = 0.5; // Set volume to 50%
    music.play().catch(() => {
      
      document.getElementById("next-button").addEventListener("click", () => {
        music.play();
      }, { once: true });
    });
  
    showReason();
  }
  
  
  function showReason() {
    if (shownReasons.length === reasons.length) {
      typeFinalMessage("There are a thousand more reasons… but here’s a start ❤️\n\nEven from far away, my heart is always with you.");
      return;
    }
    
    let index;
    do {
      index = Math.floor(Math.random() * reasons.length);
    } while (shownReasons.includes(index));
  
    currentIndex = shownReasons.length;
    shownReasons.push(index);
    displayReason(index);
  }

  function showPreviousReason() {
    if (currentIndex > 0) {
      currentIndex--;
      const index = shownReasons[currentIndex];
      displayReason(index);
    }
  }

  function typeFinalMessage(message) {
    document.getElementById("main-content").classList.add("hidden");
    const finalScreen = document.getElementById("final-screen");
    finalScreen.classList.remove("hidden");
  
    const textElement = document.getElementById("final-message");
    textElement.textContent = "";
    let i = 0;
    document.getElementById("back-button").style.display = "none";

    function typeChar() {
      if (i < message.length) {
        textElement.textContent += message.charAt(i);
        i++;
        setTimeout(typeChar, 45); 
      }
    }
  
    typeChar();
  }
  
  function displayReason(index) {
    const reasonText = document.getElementById("reason-text");
    const reasonImage = document.getElementById("reason-image");
  
    reasonText.style.opacity = 0;
    reasonImage.style.opacity = 0;
  
    // Update text
    setTimeout(() => {
      reasonText.textContent = reasons[index];
      reasonText.style.opacity = 1;
    }, 200);
  
    // Update image
    reasonImage.src = reasonImages[index];
    reasonImage.classList.remove("hidden");
    setTimeout(() => {
      reasonImage.style.opacity = 1;
    }, 200);
  
    // Trigger soft confetti
    launchConfetti();
  }
  
    
  function restart() {
    shownReasons = [];
    currentIndex = -1;
  
    document.getElementById("final-screen").classList.add("hidden");
    document.getElementById("reason-text").textContent = "";
    document.getElementById("next-button").style.display = "inline-block";
    document.getElementById("back-button").style.display = "inline-block";
  
    document.getElementById("main-content").classList.remove("hidden");
    showReason();
  }
  
  function launchConfetti() {
    for (let i = 0; i < 12; i++) {
      const heart = document.createElement("div");
      heart.classList.add("confetti-heart");
      heart.style.left = Math.random() * 100 + "vw";
      heart.textContent = "❤️";
      document.body.appendChild(heart);
      setTimeout(() => {
        heart.remove();
      }, 3000);
  }
}