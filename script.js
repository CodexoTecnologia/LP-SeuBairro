// Mobile Menu
const btnMobile = document.getElementById('btn-mobile');
const menu = document.getElementById('menu');
const icon = btnMobile.querySelector('i');

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
    // Troca ícone entre menu e fechar (X)
    if(menu.classList.contains('active')) {
        icon.classList.remove('ri-menu-3-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.add('ri-menu-3-line');
        icon.classList.remove('ri-close-line');
    }
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('active'); // Fecha menu mobile ao clicar
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito simples no formulário
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerHTML = '<i class="ri-check-line"></i> Sucesso!';
    btn.style.background = '#10B981'; // Verde Sucesso
    
    setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = ''; // Volta ao original
        this.reset();
    }, 3000);
});