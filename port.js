// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

// Typewriter effect
const typed = new Typed("#typed", {
  strings: ["Aman Khan","Front-End Developer","Web Designer"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});

// Scroll Reveal
ScrollReveal().reveal(".hero-content",{delay:200,distance:"50px",origin:"bottom"});
ScrollReveal().reveal("#about",{delay:300,distance:"50px",origin:"left"});
ScrollReveal().reveal("#skills",{delay:400,distance:"50px",origin:"right"});
ScrollReveal().reveal("#projects",{delay:500,distance:"50px",origin:"bottom"});
ScrollReveal().reveal("#contact",{delay:600,distance:"50px",origin:"top"});