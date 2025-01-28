const NEWS = document.querySelector('.news');
console.log(NEWS);


const newsArr = [
    {
        title: 'Новости о котятах',
        newText: 'Кошка в такое время сбежала',
        newsImg: './img/photo_img_3.jpg',
    },
    {
        title: 'Новости о котятах',
        newText: 'Кошка в такое время сбежала',
        newsImg: './img/photo_img_3.jpg',
    },
    {
        title: 'Новости о котятах',
        newText: 'Кошка в такое время сбежала',
        newsImg: './img/photo_img_3.jpg',
    },
    {
        title: 'Новости о котятах',
        newText: 'Кошка в такое время сбежала',
        newsImg: './img/photo_img_3.jpg',
    },
    {
        title: 'Новости о котятах',
        newText: 'Кошка в такое время сбежала',
        newsImg: './img/photo_img_3.jpg',
    },
];
console.log(newsArr);

newsArr.forEach((element) => {
    NEWS.innerHTML +=
`                <div class="newCat">
                    <h2 class="newCatTitle">${element.title}</h2>
                    <p class="newCatDescription">${element.newText}</p>
                    <img src="${element.newsImg}" class="newsImga">
                </div>`;
});
