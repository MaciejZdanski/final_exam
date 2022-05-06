const images = [
    {
        name: 'Cyfrowa Twierdza (1998 r)',
        src: 'cyfrowa.webp'
      },
      {
        name: 'Anioły i demony (2000 r)',
        src: 'anioly.webp'
      },
      {
        name: 'Zwodniczy punkt (2001 r)',
        src: 'zwodniczy.webp'
      },
      {
        name: 'Kod Leonarda da Vinci (2003 r)',
        src: 'kod.webp'
      },
      {
        name: 'Zaginiony symbol (2009 r)',
        src: 'zaginiony.webp'
      },
      {
        name: 'Inferno (2013 r)',
        src: 'inferno.webp'
      },
      {
        name: 'Początek (2017 r)',
        src: 'poczatek.webp'
      },
  ]

  function showSlide(slideNr){
    const img = document.querySelector(".carousel .image")
    img.src = "photo/"+images[slideNr].src
    img.alt = images[slideNr].name
    document.querySelector('.carousel .title').innerText = images[slideNr].name
  }
  showSlide(0)
  console.log(images)
  let currentSlide = 0;

  function changeSlide(side) {
    if(side == 'right'){
      currentSlide++
      if(currentSlide == images.length){
        currentSlide = 0
      }
    }
    else{
      currentSlide--
      if(currentSlide < 0){
        currentSlide = images.length-1
      }
    }
    showSlide(currentSlide)
  }
  
  document.querySelector(".left").addEventListener("click", () => {
    changeSlide('left')
  })
  document.querySelector(".right").addEventListener("click", () => {
    changeSlide('right')
  })
  document.querySelector(".cookies button").onclick = e =>  {
    e.target.parentElement.remove();
}