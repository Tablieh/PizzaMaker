let halal = document.querySelector(".btn_halal")
let box = document.querySelector(".box-content")
halal.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content div")
    for (const image of images) {
        if(!image.classList.contains("halal")){
           image.style.display="none"
        }
        else{
            image.style.display="block"
        }
    }
})
let vegan = document.querySelector(".btn_vegan")

    vegan.addEventListener("click", function(event){
        event.preventDefault()
        let images = document.querySelectorAll("#content div")
        for (const image of images) {
            if(!image.classList.contains("vegan")){
               image.style.display="none"
            }
             else{
                image.style.display="block"
            }
        }
})
let tous = document.querySelector(".btn_tous")
tous.addEventListener("click", function(event){
    event.preventDefault()
    let images = document.querySelectorAll("#content div")
    for (const image of images) {
        image.style.display="block"
    }
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}