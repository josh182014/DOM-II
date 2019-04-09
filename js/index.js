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

  