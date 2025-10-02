    document.addEventListener('DOMContentLoaded', () => {
    // --- MENÚ ---
    const openMenu = document.getElementById('open-menu');
    const closeMenu = document.getElementById('close');
    const nav = document.getElementById('nav');

    if (openMenu && closeMenu && nav) {
        openMenu.addEventListener('click', () => {
            nav.classList.add('active');
        });

        closeMenu.addEventListener('click', () => {
            nav.classList.remove('active');
        });

        document.querySelectorAll('.nav__links').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                }
            });
        });
    }

    // --- FAQ ---
    const questions = document.querySelectorAll('.question-item');

    questions.forEach((question) => {
        const title = question.querySelector('.question-title');

        if (title) {
            title.addEventListener('click', () => {
                question.classList.toggle('active');
            });
        }
    });
});
