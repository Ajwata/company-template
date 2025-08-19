// Мобильное меню
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});

//Подключите после основного скрипта//

document.addEventListener("DOMContentLoaded", function () {
    const line = document.querySelector('.content-line');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (line) observer.observe(line);
});

document.addEventListener("DOMContentLoaded", function () {
    const line = document.querySelector('.content-line');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (line) observer.observe(line);
});


document.addEventListener("DOMContentLoaded", function () {
    // Массив: каждому изображению — своя ссылка
    const slides = [
        { img: '/assets/1.jpg', link: '#', alt: 'Робота 1' },
        { img: '/assets/2.jpg', link: '#', alt: 'Робота 2' },
        { img: '/assets/3.jpg', link: '#', alt: 'Робота 3' },
      
    ];

    const mainImg = document.querySelector('.carousel-main img');
    const mainLink = document.querySelector('.carousel-main .carousel-link');
    const previewImg = document.querySelector('.carousel-preview img');
    const previewLink = document.querySelector('.carousel-preview .carousel-link');
    
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    
    // Функция обновления карусели
    function updateCarousel() {
        const currentSlide = slides[currentIndex];
        const nextSlide = slides[(currentIndex + 1) % slides.length];

        // Обновляем главное изображение и ссылку
        mainImg.src = currentSlide.img;
        mainImg.alt = currentSlide.alt;
        mainImg.dataset.index = currentIndex;
        mainLink.href = currentSlide.link;
        mainLink.target = '_blank';           // открывается в новом окне
        mainLink.rel = 'noopener noreferrer'; // безопасность

        // Убираем активный класс для анимации
        mainImg.classList.remove('active');

        // Обновляем превью (следующее изображение)
        previewImg.src = nextSlide.img;
        previewImg.alt = nextSlide.alt;
        previewImg.dataset.index = (currentIndex + 1) % slides.length;
        previewLink.href = nextSlide.link;
        previewLink.target = '_blank';
previewLink.rel = 'noopener noreferrer';

        // Анимация появления
        setTimeout(() => {
            mainImg.classList.add('active');
        }, 10);
    }

    // Переключение вперёд
    function next() {
        mainImg.classList.remove('active');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 300);
    }

    // Переключение назад
    function prev() {
        mainImg.classList.remove('active');
        setTimeout(() => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }, 300);
    }

    // Кнопки
    nextBtn?.addEventListener('click', next);
    prevBtn?.addEventListener('click', prev);

    // Клик по превью — переключаемся на следующее фото
    previewImg.addEventListener('click', next);

    // Инициализация
    updateCarousel();
});




document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    // Функция открытия/закрытия
    function toggleAccordion(item) {
        const isActive = item.classList.contains("active");
        const icon = item.querySelector(".toggle-icon");

        // Сначала закрываем все
        accordionItems.forEach(i => {
            i.classList.remove("active");
            const content = i.querySelector(".accordion-content");
            const ic = i.querySelector(".toggle-icon");
            if (content) content.style.maxHeight = "0";
            if (ic) ic.textContent = "+";
        });

        // Если был закрыт — открываем
        if (!isActive) {
            item.classList.add("active");
            const content = item.querySelector(".accordion-content");
            if (content) {
                content.style.maxHeight = content.scrollHeight + "px";
            }
            if (icon) {
                icon.textContent = "−";
            }
        }
    }

    // Назначаем обработчик на каждый заголовок
    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            toggleAccordion(item);
        });
    });
});
















document.addEventListener("DOMContentLoaded", () => {
    const statItems = document.querySelectorAll('.stat-item');
    const duration = 2000; // общая длительность анимации счётчика

    // Функция для запуска анимации счётчика
    function startCounter(elementId, targetValue) {
        const counterElement = document.getElementById(elementId);
        let currentValue = 0;

        const interval = setInterval(() => {
            if (currentValue >= targetValue) {
                counterElement.textContent = targetValue + '+';
                clearInterval(interval);
            } else {
                currentValue++;
                counterElement.textContent = currentValue;
            }
        }, duration / targetValue);
    }

    // Настройка Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;

                // Добавляем класс animate — запускаем анимацию появления
                item.classList.add('animate');

                // Запускаем счётчики только для видимых элементов
                if (item.querySelector('#counter-years')) {
                    startCounter('counter-years', 5);
                }
                if (item.querySelector('#counter-projects')) {
                    startCounter('counter-projects', 45);
                }

                // Опционально: отключаем наблюдение после запуска
                observer.unobserve(item);
            }
        });
    }, {
        threshold: 0.1 // Анимация запускается, когда 10% блока в зоне видимости
    });

    // Наблюдаем за каждым stat-item
    statItems.forEach(item => {
        observer.observe(item);
    });
});
