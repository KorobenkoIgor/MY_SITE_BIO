const quotes = [
    "Только те, кто рискует зайти слишком далеко, могут узнать, как далеко можно зайти. - Т.S. Элиот",
    "Великие дела начинаются с маленьких шагов.",
    "Неудачи – это просто ступени к успеху.",
    "Не сдавайтесь. Обычно последнее ключевое усилие – это ключ к успеху.",
    "Учитесь на каждом шаге. Учёба никогда не заканчивается.",
    "Верьте в себя и всегда продолжайте.",
    "Секрет успеха в постоянстве цели.",
    "Ваши возможности безграничны.",
    "Ставьте цели и работайте, пока они не станут реальностью.",
    "Успех – это путешествие, а не пункт назначения."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').innerText = quotes[randomIndex];
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Закрытие модального окна при нажатии вне его содержимого
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

