
//grabbing next and prev from index.html and setting them as variable
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

//grabbing carousel, list, thumbnail, item and time classes from index.html and setting them as variables
let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

//appends the first item in thumbnailItemsDom to thumbnailBorderDom
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

//sets two time variables
//timeRunning is 3 seconds
//timeAutoNext is 15 seconds
let timeRunning = 3000;
let timeAutoNext = 15000;

//function that handles user clicking next or previous arrows

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

//declares runTimeOut
let runTimeOut;

//declares runNextAuto to automatically render a next click after 15 seconds
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

//show slider function that handles showing new slides depending on which button was clicked
//function appends next slide to the first item of the SliderItemsDom
//functions appends previous slide shown to the first item of the thumbnailItemsDom
//function also has instructions to run automatically after 15 seconds
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
};

//function that handles the nav bar links appearing or being hidden on both nav bars

  function myNavFunction() {
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }


  function mySecondNavFunction() {
    var secondNavLinks = document.getElementById("Second-Nav-Links");
    if (secondNavLinks.style.display === "block") {
      secondNavLinks.style.display = "none";
    } else {
      secondNavLinks.style.display = "block";
    }
  }

//loops through links, when link is clicked, closeNav function is triggered

  const links = document.getElementsByClassName('nav-link')
  for (i = 0; i < links.length; i++) {
    var navLinks = links[i]
    navLinks.addEventListener('click', closeNav)
  }

//function that closes nav bars

  function closeNav() {
    var links = document.getElementById("myLinks");
    var secondNavLinks = document.getElementById("Second-Nav-Links")
    links.style.display = "none"
    secondNavLinks.style.display = "none"
  }

//event listener to make second nav close when it disappears
  window.addEventListener('scroll', function(e) {
    
    const scrollPosition = window.scrollY
    if (scrollPosition < 600) {
    closeNav()
    }
   });

//function that removes load class from div in index.html 2 seconds after animation plays
//function automatically runs on page load

function loadTimeOut() {
    setTimeout(() => {
        const load = document.getElementById('load')
        load.classList.remove('load')
    }, 2000)
  }

  loadTimeOut()

