const newsItems = [
    {
        title: "Learning JavaScript",
        date: "March 1, 2025",
        description: "I'm starting to study JavaScript in depth. More and more new projects are emerging"
    },
    {
        title: "Learning React",
        date: "April 1, 2025",
        description: "Learning the basics of React"
    },
    {
        title: "Internship at the company",
        date: "May 10, 2025",
        description: "It is planned to go on an internship at the company to gain experience"
    }
];


function addNewsItems() {
    const newsContainer = document.querySelector('.news'); // Находим контейнер для новостей

    newsItems.forEach(item => {
        // Создаем элемент новостей
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        // Добавляем заголовок
        const title = document.createElement('h3');
        title.classList.add('news-item-title');
        title.textContent = item.title;
        newsItem.appendChild(title);

        // Добавляем дату
        const date = document.createElement('p');
        date.classList.add('news-item-date');
        date.textContent = item.date;
        newsItem.appendChild(date);

        // Добавляем описание
        const description = document.createElement('p');
        description.classList.add('news-item-description');
        description.textContent = item.description;
        newsItem.appendChild(description);

        // Добавляем элемент новостей в контейнер
        newsContainer.appendChild(newsItem);
    });
}

// Вызываем функцию для добавления новостей
addNewsItems();
