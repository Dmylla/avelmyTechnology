var swiper = new Swiper('.swiper', {
slidesPerView: 3,
direction: getDirection(),
navigation: {
  nextEl: '.next',
  prevEl: '.prev',
},
on: {
  resize: function () {
    swiper.changeDirection(getDirection());
  },
  reachEnd(){
    // document.querySelector('.next').classList.add("disable")
    // document.querySelector('.prev').classList.remove("disable")
    // console.log('fim')
  },
  reachBeginning(){
    // document.querySelector('.prev').classList.add("disable")
    // document.querySelector('.next').classList.remove("disable")
  },
    fromEdge: function () {
    // Remove feedback quando não está mais no início ou fim
    document.querySelector('.next').classList.remove('disabled');
    document.querySelector('.prev').classList.remove('disabled');
  }
},  
});

// logica que ativa e desativa botões do slider
const cards = document.querySelectorAll(".swiper-slide")
console.log(cards.length)
let contador = (cards.length - 3)

document.addEventListener('DOMContentLoaded' , () =>{
  if(contador == cards.length - 3) {
    console.log('disable')
    document.querySelector('.prev').classList.add("disable")
  }
})

// button next
const nextBtn = document.querySelector('.next').addEventListener("click" , () => {
  contador -= 1
  if(contador != cards.length - 3) {
    document.querySelector('.prev').classList.remove("disable")
  }

  console.log(contador)
  if(contador ==  0 ) {
    document.querySelector('.next').classList.add("disable")
  }
})

// button prev
  const prevBtn = document.querySelector(".prev").addEventListener('click' , () => {
  contador += 1
  if(contador > 0) {
    document.querySelector('.next').classList.remove("disable")
  }

  if(contador == cards.length - 3) {
    console.log('disable')
    document.querySelector('.prev').classList.add("disable")
  }
})


function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  return direction;
}