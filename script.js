const quotes = [
    "Только те, кто рискует зайти слишком далеко, могут узнать, как далеко можно зайти. - Т.S. Элиот",
    "Не бойтесь изменений. Иногда они хороши. - Эрик Шмидт",
    "Успех — это способность идти от одной неудачи к другой, не теряя энтузиазма. - Уинстон Черчилль",
    "Ваше время ограничено, не тратьте его, живя чужой жизнью. - Стив Джобс",
    "Программирование — это как искусство, где ты создаешь свой собственный мир. - Аноним",
    "Каждая ошибка — это шаг к успеху. - Аноним",
    "Программирование — это не только код, это решение задач. - Аноним",
    "Никогда не останавливайтесь на достигнутом. - Аноним",
    "Ваши идеи могут изменить мир. - Аноним",
    "Код должен быть написан так, чтобы его было легко читать. - Аноним"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").innerText = quotes[randomIndex];
}

function showSkillDetails(skill) {
    let title, description;
    switch (skill) {
        case 'python':
            title = "Python";
            description = "Python — это высокоуровневый язык программирования, который используется для веб-разработки, анализа данных, машинного обучения и многого другого.";
            break;
        case 'flask':
            title = "Flask";
            description = "Flask — это легкий веб-фреймворк для Python, который позволяет быстро разрабатывать веб-приложения.";
            break;
        case 'app-development':
            title = "Разработка приложений";
            description = "Создание приложений для различных платформ с использованием современных технологий.";
            break;
        case 'remote-access':
            title = "Удаленный доступ";
            description = "Настройка и использование удаленного доступа для работы с клиентами и решения проблем.";
            break;
        default:
            title = "Неизвестный навык";
            description = "Описание не найдено.";
    }

    document.getElementById("skill-title").innerText = title;
    document.getElementById("skill-description").innerText = description;
    document.getElementById("skill-details").style.display = "block";
}

function closeModal() {
    document.getElementById("skill-details").style.display = "none";
}
