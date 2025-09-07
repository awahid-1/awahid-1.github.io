document.addEventListener('DOMContentLoaded', () => {

    // Image and Profession Swapper
    const images = document.querySelectorAll('.hero-image');
    const professions = ['Accountant', 'Entrepreneur'];
    const professionText = document.querySelector('.profession-text');
    let currentImageIndex = 0;
    let currentProfessionIndex = 0;

    function swapContent() {
        // Swap image
        //images[currentImageIndex].classList.remove('active');
        //currentImageIndex = (currentImageIndex + 1) % images.length;
        //images[currentImageIndex].classList.add('active');

        // Swap profession
        currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
        professionText.textContent = professions[currentProfessionIndex];
    }

    setInterval(swapContent, 4000); // Change every 4 seconds

    // Smooth scroll for nav links
    const navLinks = document.querySelectorAll('.top-nav a[href^="#"]');

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Offset for fixed nav height - looks nice :)
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const nav = document.querySelector('.top-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Activates when scrolled more than 50px
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLi = document.querySelectorAll('.top-nav ul li a');
    
    window.addEventListener('scroll', ()=> {
        let current = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if(pageYOffset >= (sectionTop - sectionHeight / 3)){
                current = section.getAttribute('id');
            }
        })

        navLi.forEach( a => {
            a.classList.remove('active');
            if(a.getAttribute('href').substring(1) == current){
                a.classList.add('active');
            }
        })
    })

});
