document.addEventListener('DOMContentLoaded', function() {
  // منوی همبرگر
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  
  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  
  // انیمیشن اسکرول
  const cyberSection = document.querySelector('.cyber-section');
  const observerOptions = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  if (cyberSection) {
    cyberSection.style.opacity = '0';
    cyberSection.style.transform = 'translateY(20px)';
    cyberSection.style.transition = 'all 0.6s ease-out';
    observer.observe(cyberSection);
  }
  
  // شبیه‌سازی وضعیت سرورها
  function updateServerStatus() {
    fetch('https://api.example.com/server-status')
      .then(response => response.json())
      .then(data => {
        // به‌روزرسانی وضعیت سرورها
        // این بخش نیاز به API واقعی دارد
      })
      .catch(error => {
        console.error('Error fetching server status:', error);
      });
  }
  
  // به‌روزرسانی هر 30 ثانیه
  setInterval(updateServerStatus, 30000);
  updateServerStatus();
});


window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 420); // بعد از ۱.۵ ثانیه مخفی میشه
});
