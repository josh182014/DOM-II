// Your code goes here

// 1. *click* Fun in the Sun button alert
document.getElementById("funSignUp").addEventListener("click", function(event){
    alert("Fun In The Sun is currently full! Please try again at a later date!")
});

// 2. *mouseover* Mountain Excursion mouseover and mouse leave events
let mtnSignUpBtn = document.getElementById("mtnSignUp").addEventListener("mouseover", function(event){
    event.target.innerText = "Pick Me!";
  });
document.getElementById("mtnSignUp").addEventListener("mouseleave", function(event){
    event.target.innerText = "ok bye then"
  });

// 3. *mouseleave* Island Getaway mouseleave event
let islandSignUpBtn = document.getElementById("islandSignUp").addEventListener("mouseleave", function(event){
    event.target.innerText = "Wait! Come back!"
  })

// 4. *scroll* Scrolling fun
let pageScroll = document.addEventListener("scroll", function(event){
    var alerted = sessionStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Wait! Close this alert and then press Shift + D ;)");
     sessionStorage.setItem('alerted','yes');
    }
})

// 5. *keydown* Secret Dark Mode (Press Shift + d)
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

// 6. *load* page load alert #annoying
window.addEventListener('load', function(event) {
    var alerted1 = sessionStorage.getItem('alerted1') || '';
    if (alerted1 != 'yes') {
     alert("page is loaded lol hi there :)");
     sessionStorage.setItem('alerted1','yes');
    }
});

// 7. *focus* phone input focus
const phone = document.querySelector('input[type="tel"]');

phone.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

// 8. *blur* phone input blur
phone.addEventListener('blur', (event) => {
    event.target.style.background = '';    
});

// 9. *submit* prevents form submit button from doing anything
const subButton = document.getElementById("signup-form").addEventListener('submit', function(event) {
    event.preventDefault();
})

// 10. *input* gets word count
document.getElementById('textArea1').addEventListener('input', function () {
    var text = this.value,
    count = text.split('').length;
    document.getElementById('textAreaLabel').textContent = "Any comments? Character count: " + count;
})

//nested stop propagation
let signupForm1 = document.getElementById('signup-form').addEventListener('click', function (event) {
    alert('form clicked')
});
let textInput1 = document.querySelectorAll('input')[0].addEventListener('click', function (event) {
    event.stopPropagation();
});
let textInput2 = document.querySelectorAll('input')[1].addEventListener('click', function (event) {
    event.stopPropagation();
});
let textInput3 = document.querySelectorAll('input')[2].addEventListener('click', function (event) {
    event.stopPropagation();
});
let textInput4 = document.querySelectorAll('input')[3].addEventListener('click', function (event) {
    event.stopPropagation();
});
let textarea = document.querySelectorAll('textarea')[0].addEventListener('click', function (event) {
    event.stopPropagation();
});
//stop nav
let testNav = document.querySelectorAll(".nav-link")
for (let i = 0; i < testNav.length; i++) {
    testNav[i].addEventListener("click", function(event){
        event.preventDefault();
    })
};