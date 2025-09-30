// Primeira linha - da direita para a esquerda
    var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    speed: 3000, // mais lento e constante
    allowTouchMove: false,
    freeMode: true,
    freeModeMomentum: false,
    autoplay: {
      delay: 1, // evita o bug do delay:0
      disableOnInteraction: false,
      reverseDirection: true
    }
  });
    // Segunda linha - da esquerda para a direita
    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      speed: 2000,
      allowTouchMove: false,
      freeMode: true,
      freeModeMomentum: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      }
    });