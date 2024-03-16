document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, была ли смена изображения
    if (localStorage.getItem('imageChanged') === 'true') {
        // Если да, меняем src для изображения
        document.querySelector('.centered-image img').src = "rise-of-olympus-slots-games.webp"; // Укажите путь к новому изображению
        
    }
});

    
    // Переменная для контроля возможности клика и ее значение по умолчанию
    var canClick = true;
    var clickTimeout = 10000; // Значение по умолчанию

    // Функция для установки времени ожидания клика
    function setClickTimeout() {
        canClick = false;
        setTimeout(function() {
            canClick = true;
        }, clickTimeout);
    }

    // Получаем значение времени ожидания клика из локального хранилища, если оно там есть
    var storedClickTimeout = localStorage.getItem('clickTimeout');
    if (storedClickTimeout !== null) {
        clickTimeout = parseInt(storedClickTimeout);
    }

    // Обработчик события клика по изображению
    document.querySelector('.centered-image img').addEventListener('click', function() {
        if (canClick) {
            // Добавляем класс для анимации тряски
            var image = document.querySelector('.centered-image img');
            image.classList.add('shake-image');
            
            // Убираем класс через некоторое время
            setTimeout(function() {
                image.classList.remove('shake-image');
            }, 500);

            // Запрещаем клик на определенное время
            canClick = false;
            // Здесь меняем время ожидания клика на 5 секунд, если такое значение есть в локальном хранилище
            var clickTimeout = localStorage.getItem('clickTimeout');
            setTimeout(function() {
                canClick = true;
            }, clickTimeout ? parseInt(clickTimeout) : 10000); // По умолчанию 10 секунд

            // Получаем информацию о покупке улучшения из localStorage
            var boostPurchased = localStorage.getItem('boostPurchased');
            
            // Определяем значение для увеличения баланса в зависимости от покупки улучшения
            var increment = (boostPurchased === 'true') ? 0.00500 : 10.00100;

            // Отображаем полосу прогресса
            var progressBarContainer = document.querySelector('.progress-bar-container');
            progressBarContainer.classList.remove('hidden');

            // Запускаем анимацию полосы прогресса
            var progressBar = document.querySelector('.progress-bar');
            progressBar.style.animationPlayState = 'running';

            // Слушаем событие окончания анимации
            progressBar.addEventListener('animationend', function() {
                // Скрываем полосу прогресса
                progressBarContainer.classList.add('hidden');
            }, {once: true}); // Отписываемся после первого срабатывания

            // Увеличиваем баланс
            var balanceElement = document.querySelector('.balance-container p');
            var balance = parseFloat(balanceElement.textContent);
            balance += increment;
            balanceElement.textContent = balance.toFixed(5);

            // Сохраняем баланс в localStorage
            localStorage.setItem('balance', balance);
        }
    });

    // Получаем текущий баланс из localStorage, если он там есть
    var balance = localStorage.getItem('balance');
    if (balance === null) {
        // Если баланс еще не установлен, устанавливаем его в 0
        balance = 0;
    } else {
        // Преобразуем строку в число
        balance = parseFloat(balance);
    }

    // Обновляем отображение баланса на странице
    var balanceElement = document.querySelector('.balance-container p');
    balanceElement.textContent = '' + balance.toFixed(5);

    // Обработчик события для кнопки "💲"
    document.querySelector('.menu-button').addEventListener('click', function() {
        var balanceElement = document.querySelector('.balance-container p');
        var balance = parseFloat(balanceElement.textContent);
        
        // Проверяем, достаточно ли у пользователя средств
        if (balance >= 0.0000) {
            window.location.href = 'pay.html';
        } else {
            // Можно добавить какие-то действия в случае недостаточного баланса
        }
    });

    // Добавляем обработчик события для кнопки "✨"
    document.addEventListener("DOMContentLoaded", function() {
        var menuButtons = document.querySelectorAll('.menu-button');
        menuButtons.forEach(function(button) {
            if (button.innerText === "🔋") {
                button.addEventListener('click', function() {
                    window.location.href = 'boost.html';
                });
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // Получаем контейнер прогресс-бара
        var progressBarContainer = document.querySelector('.progress-bar-container');

        // Получаем прогресс-бар
        var progressBar = document.querySelector('.progress-bar');

        // Получаем сохраненное значение времени анимации из локального хранилища
        var animationDuration = localStorage.getItem('animationDuration');

        // Если значение времени анимации установлено, применяем его к прогресс-бару
        if (animationDuration !== null) {
            progressBar.style.animationDuration = animationDuration;
        }

        // Обработчик события окончания анимации
        progressBar.addEventListener('animationend', function() {
            // Скрываем прогресс-бар
            progressBarContainer.classList.add('hidden');
        }, {once: true}); // Отписываемся после первого срабатывания
    });

    // Обработчик события для кнопки "📮"
document.querySelector('.menu-button.image3').addEventListener('click', function() {
    window.location.href = 'task.html'; // Перенаправляем на страницу task.html
});



