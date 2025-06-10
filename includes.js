function includeHTML(callback) {
    const elements = document.querySelectorAll('[include-html]');
    let remaining = elements.length;
  
    if (!remaining) {
      callback(); // nothing to load
      return;
    }
  
    elements.forEach((el) => {
      const file = el.getAttribute('include-html');
      if (file) {
        fetch(file)
          .then((res) => res.text())
          .then((data) => {
            el.innerHTML = data;
            el.removeAttribute('include-html');
            remaining--;
            if (remaining === 0) callback();
          })
          .catch((err) => {
            console.warn('Include HTML failed:', err);
            remaining--;
            if (remaining === 0) callback();
          });
      }
    });
  }
  
  // RUN INCLUDES, THEN INIT NAVBAR
  document.addEventListener('DOMContentLoaded', () => {
    includeHTML(() => {
      lucide.createIcons(); // icons inside navbar
      initNavbar(); // this comes from navbar.js
    });
  });
  