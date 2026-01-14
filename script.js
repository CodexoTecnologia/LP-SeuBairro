// Mobile Menu Toggle
const btnMobile = document.getElementById('btn-mobile');
const menu = document.getElementById('menu');
const icon = btnMobile.querySelector('i');

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('active');
    
    // Alterna ícone (Menu Hamburguer <-> X)
    if(menu.classList.contains('active')) {
        icon.classList.remove('ri-menu-3-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.add('ri-menu-3-line');
        icon.classList.remove('ri-close-line');
    }
});

// Fecha menu ao clicar em links (Scroll Suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.remove('active');
        icon.classList.add('ri-menu-3-line'); // Reseta ícone
        icon.classList.remove('ri-close-line');
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Simulação de Envio de Formulário (Visual)
const form = document.getElementById('waitlistForm');
if(form) {
    form.addEventListener('submit', function(e) {
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
}