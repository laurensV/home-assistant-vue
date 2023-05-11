import { defineNuxtPlugin } from '#app'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    const elements = document.querySelectorAll('#content [data-aos]');

    [].forEach.call(elements, function(el) {
      el.classList.remove('aos-animate')
    });
  })
  if (typeof window !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out-cubic',
      once: false
    });
  }
});
