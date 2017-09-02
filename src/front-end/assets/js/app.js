console.log(`app.js loaded`);

// put everything inside an IIFE
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded");
  })
})();
