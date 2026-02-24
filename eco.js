/* menu mobile hamburger */
const btnMobile = document.querySelector('.mobile-menu-btn');
const menuNav = document.querySelector('.nav-menu');

btnMobile.addEventListener('click', function() {
    menuNav.classList.toggle('aktif');
});

/* fitur faq (tanya jawab) */
const semuaFaq = document.querySelectorAll('.faq-item');

semuaFaq.forEach(function(item) {
    const pertanyaan = item.querySelector('.faq-question');
    
    // kalau bagian pertanyaan diklik
    pertanyaan.addEventListener('click', function() {
        
        // tutup kotak faq lain yang sedang terbuka
        semuaFaq.forEach(function(itemLain) {
            if (itemLain !== item) {
                itemLain.classList.remove('aktif');
            }
        });

        // baru buka atau tutup kotak faq yang sedang diklik
        item.classList.toggle('aktif');
    });
});

const tombolStore = document.querySelectorAll('.btn-store');

tombolStore.forEach(function(tombol) {
    tombol.addEventListener('click', function(event) {
        
        event.preventDefault(); 
        
        alert('Terima kasih! Aplikasi Eco-Track akan segera mulai diunduh ke perangkat Anda.');
    });
});


