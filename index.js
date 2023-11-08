ScrollReveal({
    reset:true,
    duration:2000,
    delay:25,
})
ScrollReveal().reveal('.abtreveal , .moving',{delay:500,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.vision ',{delay:700,origin:'left',interval:200,distance:'45px'})
ScrollReveal().reveal('.mission ',{delay:700,origin:'right',interval:200,distance:'45px'})
ScrollReveal().reveal('.cs ',{delay:150,origin:'bottom',interval:100,distance:'45px'})
ScrollReveal().reveal('.is ',{delay:150,origin:'bottom',interval:100,distance:'45px'})
ScrollReveal().reveal('.ai ',{delay:150,origin:'top',interval:100,distance:'45px'})
ScrollReveal().reveal('.csd ',{delay:150,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.csbs ',{delay:150,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.ec ',{delay:150,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.mech ',{delay:150,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.training ',{delay:300,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.offer ',{delay:700,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.recruiters ',{delay:700,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.placedno ',{delay:700,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.fac ',{delay:500,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.amen ',{delay:600,origin:'left',interval:200,distance:'45px'})
ScrollReveal().reveal('.r h2 ',{delay:400,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.sup ',{delay:600,origin:'right',interval:200,distance:'45px'})
ScrollReveal().reveal('.add ',{delay:500,origin:'top',interval:200,distance:'45px'})
ScrollReveal().reveal('.box-2 ',{delay:600,origin:'left',interval:200,distance:'45px'})
ScrollReveal().reveal('.enq ',{delay:500,origin:'bottom',interval:200,distance:'45px'})
ScrollReveal().reveal('.submitt ',{delay:700,origin:'right',interval:200,distance:'45px'})
ScrollReveal().reveal('.ach h2 ',{delay:500,origin:'top',interval:200,distance:'145px'})
ScrollReveal().reveal('.achievements ',{delay:700,origin:'bottom',interval:200,distance:'45px'})


let valueDisplays = document.querySelectorAll(".num");
let interval = 8000;

// Intersection Observer callback function
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is in the viewport, play the animation
      playAnimation(entry.target);
    } else {
      // Element is not in the viewport, pause the animation
      pauseAnimation(entry.target);
    }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.5, // Adjust this threshold as needed
});

// Observe each valueDisplay element
valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});

function playAnimation(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / 400);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}

function pauseAnimation(valueDisplay) {
  // Clear any existing animation interval
  valueDisplay.textContent = valueDisplay.getAttribute("data-val");
}

// Initial check to see if any elements are already in the viewport
valueDisplays.forEach((valueDisplay) => {
  const entry = observer.takeRecords()[0];
  if (entry && entry.isIntersecting) {
    playAnimation(valueDisplay);
  }
});
var topIndex=100;
    function moveToTop(picture){
    picture.style.zIndex=++topIndex;
    }