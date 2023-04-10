const swiper = new Swiper(".swiper", {
  // slidesPerView: 'auto', // устанавливаем автоматический расчет количества видимых слайдов
  // spaceBetween: 0, // устанавливаем расстояние между слайдами в 0
  // centeredSlides: true, // устанавливаем, что слайды будут центрироваться
  // grabCursor: true, // устанавливаем курсор-руку при наведении на слайдер
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 1000,
  spaceBetween: 0,
  slidesPerView: 1,
  // autoplay: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true, // устанавливаем, что пагинация будет кликабельна
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});


const animItems = document.querySelectorAll("._anim_items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i += 1) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim_no_hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

document.querySelector(".icon-menu").addEventListener("click", function () {
  document.querySelector(".icon-menu").classList.toggle("active");
  document.querySelector(".icon-menu-span").classList.toggle("active");
  document.querySelector(".menu__body").classList.toggle("active");
});

