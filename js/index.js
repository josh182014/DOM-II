// Your code goes here

// 1. Fun in the Sun button alert
document.getElementById("funSignUp").addEventListener("click", function(event){
    alert("Fun In The Sun is currently full! Please try again at a later date!")
});

// 2. Mountain Excursion mouseover and mouse leave events
let mtnSignUpBtn = document.getElementById("mtnSignUp").addEventListener("mouseover", function(event){
    event.target.innerText = "Pick Me!";
  });
document.getElementById("mtnSignUp").addEventListener("mouseleave", function(event){
    event.target.innerText = "ok bye then"
  });

// 3. Island Getaway mouseleave event
let islandSignUpBtn = document.getElementById("islandSignUp").addEventListener("mouseleave", function(event){
    event.target.innerText = "Wait! Come back!"
  })

// 4. Scrolling fun
let pageScroll = document.addEventListener("scroll", function(event){
    var alerted = sessionStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Wait! Close this alert and then press Shift + D ;)");
     sessionStorage.setItem('alerted','yes');
    }
})

// 5. Secret Dark Mode (Press Shift + d)
let darkMode = document.addEventListener("keydown", function(event){
    if (event.key === 'D') {
        document.getElementById("body").style.background = 'black';
        document.getElementById("body").style.color = 'white';
        document.getElementById("main-nav").style.background = 'black';
        let x = document.querySelectorAll(".nav-link")
        for (let i = 0; i < x.length; i++) {
            x[i].style.color = 'white';
        };
        alert("Activated secret dark mode!");
    }
})

// 6. page load alert #annoying
window.addEventListener('load', function(event) {
    alert("page is loaded lol hi there :)")
});

// 7. phone input focus
const phone = document.querySelector('input[type="tel"]');

phone.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

// 8. phone input blur
phone.addEventListener('blur', (event) => {
    event.target.style.background = '';    
});

// 9. prevents form submit button from doing anything
const subButton = document.getElementById("submitButton").addEventListener('click', function(event) {
    event.preventDefault();
})

// 10.



//nested


//stop nav
let testNav = document.querySelectorAll(".nav-link")
for (let i = 0; i < testNav.length; i++) {
    testNav[i].addEventListener("click", function(event){
        event.preventDefault();
    })
};