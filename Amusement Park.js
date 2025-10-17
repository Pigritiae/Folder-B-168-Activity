// Script para o carrossel de atrações
        document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.carousel-container');
            const items = document.querySelectorAll('.carousel-item');
            const prevBtn = document.querySelector('.carousel-btn.prev');
            const nextBtn = document.querySelector('.carousel-btn.next');
            let currentIndex = 0;
            
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
            
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel();
            });
            
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarousel();
            });
            
            // Auto-advance the carousel every 5 seconds
            setInterval(function() {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel();
            }, 5000);
            
            // Script para as abas de programação
            const tabBtns = document.querySelectorAll('.tab-btn');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons and content
                    tabBtns.forEach(b => b.classList.remove('active'));
                    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                    
                    // Add active class to clicked button and corresponding content
                    this.classList.add('active');
                    document.getElementById(this.dataset.day).classList.add('active');
                });
            });
        });