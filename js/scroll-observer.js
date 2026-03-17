const mtnContainer = document.querySelector('#mtn-container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      mtnContainer.classList.add('mtn-animate');
      mtnContainer.classList.remove('mtn-paused');
      
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observer.observe(mtnContainer);