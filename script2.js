let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    if (index < 0) currentIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
        dots[i].classList.toggle('active', i === currentIndex);
    });
}

function moveSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});
document.addEventListener('DOMContentLoaded', function() {
    const filter = document.getElementById('services-filter');
    const services = document.querySelectorAll('.service');

    filter.addEventListener('change', function() {
        const selectedCategory = filter.value;

        services.forEach(service => {
            const categories = service.dataset.category.split(' ');

            if (selectedCategory === 'all' || categories.includes(selectedCategory)) {
                service.style.display = 'block';
            } else {
                service.style.display = 'none';
            }
        });
    });
});


function greetUser(event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы
    alert("Хорошего отдыха!"); // Показываем сообщение
  }