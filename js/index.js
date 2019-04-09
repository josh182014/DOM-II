// Your code goes here

//Fun in the Sun button alert
document.getElementById("funSignUp").addEventListener("click", function(event){
    alert("Fun In The Sun is currently full! Please try again at a later date!")
});

//Mountain Excursion mouseover and mouse leave events
let mtnSignUpBtn = document.getElementById("mtnSignUp").addEventListener("mouseover", function(event){
    event.target.innerText = "Pick Me!";
  });
document.getElementById("mtnSignUp").addEventListener("mouseleave", function(event){
    event.target.innerText = "ok bye then"
  });

  //Island Getaway mouseleave event
let islandSignUpBtn = document.getElementById("islandSignUp").addEventListener("mouseleave", function(event){
    event.target.innerText = "Wait! Come back!"
  })

  //Scrolling fun
let pageScroll = document.addEventListener("scroll", function(event){
    var alerted = sessionStorage.getItem('alerted') || '';
    if (alerted != 'yes') {
     alert("Wait! Close this alert and then press Shift + D ;)");
     sessionStorage.setItem('alerted','yes');
    }
})

//Dark Mode (Press Shift + d)
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

