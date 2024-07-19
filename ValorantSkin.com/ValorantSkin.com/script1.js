// ============================== slider =============================
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let buttons = document.querySelectorAll('.btn');

let lengthItems = items.length - 1;
let active = 0;
let yenilemeAraligi;

// Fonksiyon: Slider'ı yeniden yükle
function slideriYenidenYukle() {
    slider.style.left = -items[active].offsetLeft + 'px';
}


// Sonraki ve önceki buton tıklama olayları
next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    slideriYenidenYukle();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    slideriYenidenYukle();
}

// Nokta tıklama olayları
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        slideriYenidenYukle();
    });
});

// Pencere yeniden boyutlandığında slider'ı yeniden yükle
window.onresize = function(event) {
    slideriYenidenYukle();
};

// Otomatik yenileme aralığını başlat
function startInterval() {
    yenilemeAraligi = setInterval(() => { next.click() }, 3000);
}

// Otomatik yenileme aralığını durdur
function stopInterval() {
    clearInterval(yenilemeAraligi);
}

// Otomatik yenileme aralığını başlat
startInterval();

// Slider'ı ilk kez yükle
slideriYenidenYukle();

// Mouse okların üzerine geldiğinde otomatik yenileme aralığını durdurma
next.addEventListener('mouseover', stopInterval);
prev.addEventListener('mouseover', stopInterval);

// Mouse okların üzerinden ayrıldığında otomatik yenileme aralığını başlatma
next.addEventListener('mouseout', startInterval);
prev.addEventListener('mouseout', startInterval);
// ============================== slider  END=============================