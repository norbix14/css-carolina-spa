document.addEventListener('DOMContentLoaded', () => {
  var swiper;
  const emptyAnchors = Array.from(document.querySelectorAll('a[href="#"]'));
  const slider = document.querySelector('#slider');
  const allProductsDescription = Array.from(
    document.querySelectorAll('p.product__description')
  );
  const appointmentText = document.querySelector('p.appointment__text');

  const truncate = (text, len = 80, end = '...') => {
    let isLarge, limit;
    isLarge = text.length > len;
    limit = len - end.length;
    if (isLarge) {
      return text.substring(0, limit) + end;
    }
    return text;
  };

  if (slider) {
    const container = '.slider';
    const config = {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
    };
    swiper = new window.Swiper(container, config);
  }

  if (emptyAnchors.length > 0) {
    emptyAnchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault());
    });
  }

  if (appointmentText) {
    appointmentText.innerText = truncate(appointmentText.innerText, 100);
  }

  if (allProductsDescription.length > 0) {
    allProductsDescription.forEach((product) => {
      product.innerText = truncate(product.innerText, 80);
    });
  }
});
