// Scroll suave para o topo
document.querySelector('.to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menu responsivo
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});

// Animações de scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

document.querySelectorAll('.animate').forEach(element => {
    observer.observe(element);
});