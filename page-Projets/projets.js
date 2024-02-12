let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick  = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

sr.reveal('.logo',{delay: 200, origin: 'letf'});
sr.reveal('.navbar',{delay: 400, origin: 'top'});
sr.reveal('.menu-btn',{delay: 520, origin: 'right'});

sr.reveal('.home-text span',{delay: 600, origin: 'top'});
sr.reveal('.home-text h1',{delay: 680, origin: 'left'});
sr.reveal('.home-text p',{delay: 750, origin: 'right'});
sr.reveal('.main-btn',{delay: 860, origin: 'left'});

sr.reveal('.share',{delay: 950, origin: 'bottom'});

sr.reveal('.home-img',{delay: 1000, origin: 'right'});
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const showAllButton = document.getElementById('showAllButton');
    const hiddenProjects = document.querySelector('.hidden-projects');
    const filterButtons  = docuement.querySelectorAll('filter-btn');

    showAllButton.addEventListener('click', function() {
        projects.forEach(project => {
            project.classList.remove('hidden');
        });
    });

    showAllButton.addEventListener('click', function() {
        hiddenProjects.style.display = 'flex';
        this.style.display = 'none';
    });

    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

        project.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });

   
});
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function toggleVideo() {
  var video = document.getElementById('demoVideo');
  var image = document.getElementById('demoImage');
  
  if (video.style.display === 'none') {
      video.style.display = 'block';
      video.play(); // Auto-play the video when displayed
      image.style.display = 'none'; // Hide the image
  } else {
      video.style.display = 'none';
      video.pause(); // Pause the video when hidden
      image.style.display = 'block'; // Show the image
  }
}