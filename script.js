document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('.icon');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            icon.textContent = '🌙';
        } else {
            icon.textContent = '☀️';
        }
    });
});
