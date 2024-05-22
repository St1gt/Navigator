let isDragging = false;
let dragStartX, dragStartY;
let currentTranslateX = 100;
let currentTranslateY = 100;
let currentScale = 1;

const floorSvg = document.getElementById('floorSvg');

floorSvg.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    floorSvg.style.cursor = 'grabbing';
});

floorSvg.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        currentTranslateX += deltaX;
        currentTranslateY += deltaY;
        floorSvg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
    }
});

floorSvg.addEventListener('mouseup', () => {
    isDragging = false;
    floorSvg.style.cursor = 'grab';
});

floorSvg.addEventListener('wheel', (e) => {
    const delta = e.deltaY > 0 ? 0.9 : 1.1; // уменьшение или увеличение масштаба
    currentScale *= delta;
    floorSvg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentScale})`;
});

// Поиск
function performSearch() {
    // Ваш код для обработки поиска
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Вы выполнили поиск по:', searchTerm);

    // Найти магазин по введенному ID
    var shopElement = document.getElementById(searchTerm);

    if (shopElement !== null) {
        // Если магазин найден, вызвать событие click на нем
        var clickEvent = new Event('click');
        shopElement.dispatchEvent(clickEvent);
    } else {
        sessionStorage.setItem('searchTerm', searchTerm);
        window.location.href = "/second/secondFloor.html";
    }

    // Дополнительная логика поиска может быть добавлена здесь
}

//Попытка поиска с диномическим списком
var shops = [
    { id: 'shop1', name: 'DNS', image: '/public/img/dns.png', description: 'Компания DNS является одним из лидеров цифрового ритейла России. Для Вас космический ассортимент: компьютеры, ноутбуки, смартфоны, телевизоры, аксессуары и многое другое. Предназначение DNS – быть лучшим проводником товара от производителя к покупателю!' },
    { id: 'shop2', name: '5 Карманов', image: '/img/Karmanobv.jpg', description: '«5 КармаNов» — это сеть розничных мультибрендовых магазинов джинсовой одежды на каждый день оригинального дизайна и высокого качества.' },
    { id: 'shop3', name: 'Hoff', image: '/img/hoff.png', description: 'Сеть гипермаркетов Hoff — это одна из крупнейших российских и динамично развивающихся мебельных сетей. Это единственная российская сеть мебели и аксессуаров для дома, работающая в формате гипермаркета. Наши гипермаркеты имеют уникальный для российского рынка формат - "Все в одном месте". Мы предлагаем комплексные интерьерные решения на основе широкого мультибрендового ассортимента. Помимо этого, вы всегда можете совершить заказ он - лайн на сайте hoff.ru или через приложение' },
    { id: 'shop4', name: 'Guess', image: '/img/guess.png', description: 'GUESS — американский бренд, который специализируется на производстве одежды, аксессуаров, обуви, ювелирных украшений, солнцезащитных очков и парфюмерии для женщин и мужчин.' },
    { id: 'shop5', name: 'Askona', image: '/img/askona.png', description: 'Фабрика товаров для здорового сна Askona — лидер индустрии товаров для сна в России и крупнейшая фабрика по производству ортопедических матрасов в Восточной Европе.' },
    { id: 'shop6', name: 'Befree', image: '/img/befree.png', description: 'Один из брендов крупнейшей fashion-компании на российском рынке — Melon Fashion Group. Befree — это бренд для тех, кто молод внутри. Магазин молодежной женской одежды по демократичным ценам. В ассортименте представлены платья, юбки, шорты, футболки, джемперы, пиджаки, джинсы и аксессуары: сумки, шарфы, бижутерия, носки и колготки.' },
    { id: 'shop7', name: 'Bork', image: '/img/bork.png', description: 'BORK — международный бренд бытовой техники премиум-класса. Для создания продукции такого уровня BORK привлекает экспертов со всего мира: Швейцарии, Австралии, Японии, Китая и других стран. Техника BORK отмечена во всем мире. Эксклюзивные модели уже завоевали более 50 международных наград в области промышленного дизайна: RedDot Design Award, iF Design Award и др. Разрабатывая новинки, компания добивается совершенства в каждой детали. Познакомиться с коллекцией можно в бутике BORK.' },
    { id: 'shop8', name: 'Casio', image: '/img/casio.png', description: 'CASIO — всемирно известный японский бренд, завоевавший всеобщую любовь и популярность благодаря надёжности, прогрессивности и функциональности.' },
    { id: 'shop9', name: 'DJ', image: '/img/gj.png', description: 'Gloria Jeans — динамично развивающийся модный бренд одежды и аксессуаров. Это «Марка №1» в России в 2022 году в категории «сеть магазинов одежды». Магазины Gloria Jeans работают более чем в 300 городах, и сеть растет с каждым днем. Бренд ориентируется на высокий уровень качества, оставаясь доступным по цене. Gloria Jeans регулярно обновляет коллекции в соответствии с последними трендами и желаниями покупателей. Знавате о новинках и специальных предложениях на сайте и в социальных сетях.' },
    { id: 'shop10', name: 'Dub', image: '/img/dub.png', description: 'DUB – это новый бренд одежды для молодых людей, которые любят жизнь и получают от нее удовольствие. Их заряжают встречи с друзьями, хорошая музыка, путешествия и активный образ жизни. Для них комфорт и легкий дух бунтарства – главные ценности, а мода – способ самовыражения.' },
    { id: 'shop11', name: 'Familia', image: '/img/famila.png', description: 'Офпрайс-универмаг, предлагающий покупателям широкий ассортимент женской, мужской, детской одежды и обуви, игрушек, аксессуаров, товаров для дома и декора с экономией до 85% на каждой покупке.' },
    { id: 'shop12', name: 'Acoola', image: '/img/acoola.png', description: 'Acoola — популярная марка одежды, обуви и аксессуаров для детей от 2 до 14 лет. В основе концепции бренда — современный подход к созданию детских коллекций, учитывающий актуальные тенденции моды. Ассортимент бренда включает в себя повседневную, школьную и праздничную одежду самых разных фасонов и стилей, а также широкий выбор аксессуаров, обуви, бельевых и чулочно-носочных изделий.' },
    { id: 'shop13', name: 'Haier', image: '/img/haier.png', description: 'Haier — китайская торговая марка, под которой производится различная бытовая техника, климатическое оборудование и электроника. В переводе с китайского «haier» означает «море». Компания Haier была основана в 1984 году путем слияния китайской компании Qingdao Refrigerator Co.' },
    { id: 'shop14', name: 'Amazingred', image: '/img/amazingred.png', description: 'AMAZING RED – мультибрендовый магазин, предлагающая одежду, обувь и аксессуары от популярных спортивных брендов. Основу ассортимента составляют коллекции для бега, йоги, фитнеса, тренинга и трейлраннинга от таких брендов, как PUMA, Nike, New Balance, Reebok, Asics, Street Beat и Hoka. Также в магазине представлены повседневная одежда и обувь для любителей активного образа жизни и поклонников уличной моды.' },
    { id: 'shop15', name: 'Adidas', image: '/img/adidas.png', description: 'Аdidas — креативный спортивный бренд, призывающий мыслить нестандартно в игре и в повседневной жизни. В магазине adidas представлены одежда, обувь и аксессуары для самых популярных видов спорта. Профессиональные консультанты помогут сделать правильный выбор в зависимости от индивидуальных потребностей покупателя.' },
    { id: 'shop16', name: 'Kari', image: '/img/kari.png', description: 'Kari — это бренд №1 по продажам обуви в России. Бренд реализует концепцию fast-fashion: предлагает покупателям разнообразный, постоянно обновляющийся ассортимент модной обуви и аксессуаров по демократичным ценам. В Kari представлены коллекции обуви Pierre Cardin, Alessio Nesсa, T.Taccardi и многие другие. Это классический и современный дизайн, натуральные материалы, высокое качество и справедливые цены.' },
    { id: 'shop17', name: 'Jns', image: '/img/jns.png', description: 'JNS – российская мультибрендовая сеть одежды и обуви для жизни. В магазине представлены товары известных по всему миру брендов, начиная с джинсовых JNS, Lee, Wrangler, Lee Cooper, заканчивая Lacoste, Diadora, Vans.' }
];


// Обновление списка магазинов по введенным символам
// Обновление списка магазинов по введенным символам
// Обновление списка магазинов по введенным символам
function updateShopList() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Фильтрация магазинов по введенным символам
    var matchingShops = shops.filter(function (shop) {
        return shop.name.toLowerCase().includes(searchTerm);
    });

    // Отображение списка магазинов
    displayShopList(matchingShops);

    // Закрытие списка магазинов после выполнения поиска
    var shopListContainer = document.getElementById('shopListContainer');
    shopListContainer.classList.remove('active');
}

// Отображение списка магазинов
function displayShopList(shops) {
    var shopListContainer = document.getElementById('shopListContainer');
    shopListContainer.innerHTML = ''; // Очищаем контейнер перед обновлением

    if (shops.length > 0) {
        // Если найдены магазины, добавляем их в список
        var ul = document.createElement('ul');
        shops.forEach(function (shop) {
            var li = document.createElement('li');
            li.textContent = shop.name;
            li.addEventListener('click', function () {
                // Заполняем поле поиска при выборе магазина
                document.getElementById('searchInput').value = shop.name;
                // Показываем информацию о магазине
                showShopInfo(shop.name, shop.image, shop.description);

                // Закрытие списка магазинов после выбора элемента
                hideShopList();
            });
            ul.appendChild(li);
        });
        shopListContainer.appendChild(ul);
    } else {
        // Если магазины не найдены, можно добавить соответствующее сообщение
        var noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'Магазины не найдены';
        shopListContainer.appendChild(noResultsMessage);
    }
}

function hideShopList() {
    var shopListContainer = document.getElementById('shopListContainer');
    shopListContainer.classList.remove('active');
}

// Добавляем обработчик фокуса на поле ввода
var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('focus', function () {
    // Отображаем список магазинов при фокусировке на поле ввода
    updateShopList();
});

// Добавляем обработчик клика на документе, чтобы скрывать список магазинов
document.addEventListener('click', function (event) {
    var shopListContainer = document.getElementById('shopListContainer');
    var searchInput = document.getElementById('searchInput');

    if (event.target !== shopListContainer && !shopListContainer.contains(event.target) && event.target !== searchInput) {
        // Закрытие списка магазинов при клике за его пределами и не на поле ввода
        hideShopList();
    }
});

function toggleFilterContainer() {
    console.log('toggleFilterContainer called');
    var filterContainer = document.getElementById('filterContainer');
    var computedStyle = window.getComputedStyle(filterContainer);

    if (computedStyle.display === 'none') {
        filterContainer.style.display = 'block';
    } else {
        filterContainer.style.display = 'none';
    }
}
// Функция для переключения видимости выпадающего списка
function toggleDropdown(dropdownId) {
    console.log('toggleDropdown called for dropdownId:', dropdownId);
    var dropdown = document.getElementById(dropdownId);
    var computedStyle = window.getComputedStyle(dropdown);

    if (computedStyle.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}


// Функция для переключения выбора и изменения цвета
function toggleSelection(label) {
    label.classList.toggle('selected');
    var checkboxId = label.getAttribute('for');
    var checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked;
}

// Функция для применения фильтров
function applyFilters() {
    // Ваш код для обработки выбранных фильтров
    console.log('Фильтры применены');
    // Дополнительная логика фильтрации может быть добавлена здесь

    // Закрыть контейнер с фильтрами после применения
    var filterContainer = document.getElementById('filterContainer');
    filterContainer.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function () {
    // Добавляем обработчики событий для каждого магазина
    var shop1 = document.getElementById('DNS');
    shop1.addEventListener('click', function () {
        showShopInfo('DNS', '/img/dns.png', 'Компания DNS является одним из лидеров цифрового ритейла России. Для Вас космический ассортимент: компьютеры, ноутбуки, смартфоны, телевизоры, аксессуары и многое другое. Предназначение DNS – быть лучшим проводником товара от производителя к покупателю!');
    });
    var shop2 = document.getElementById('5 КармаNов');
    shop2.addEventListener('click', function () {
        showShopInfo('5 КармаNов', '/img/Karmanobv.jpg', '«5 КармаNов» — это сеть розничных мультибрендовых магазинов джинсовой одежды на каждый день оригинального дизайна и высокого качества.');
    });
    var shop3 = document.getElementById('Hoff');
    shop3.addEventListener('click', function () {
        showShopInfo('Hoff', '/img/hoff.png', 'Сеть гипермаркетов Hoff — это одна из крупнейших российских и динамично развивающихся мебельных сетей. Это единственная российская сеть мебели и аксессуаров для дома, работающая в формате гипермаркета. Наши гипермаркеты имеют уникальный для российского рынка формат - "Все в одном месте".Мы предлагаем комплексные интерьерные решения на основе широкого мультибрендового ассортимента. Помимо этого, вы всегда можете совершить заказ он - лайн на сайте hoff.ru или через приложение');
    });
    var shop4 = document.getElementById('GUESS');
    shop4.addEventListener('click', function () {
        showShopInfo('GUESS', '/img/guess.png', 'GUESS — американский бренд, который специализируется на производстве одежды, аксессуаров, обуви, ювелирных украшений, солнцезащитных очков и парфюмерии для женщин и мужчин.');
    });
    var shop5 = document.getElementById('Askona');
    shop5.addEventListener('click', function () {
        showShopInfo('Askona', '/img/askona.png', 'Фабрика товаров для здорового сна Askona — лидер индустрии товаров для сна в России и крупнейшая фабрика по производству ортопедических матрасов в Восточной Европе.');
    });
    var shop6 = document.getElementById('Befree');
    shop6.addEventListener('click', function () {
        showShopInfo('Befree', '/img/befree.png', 'Один из брендов крупнейшей fashion-компании на российском рынке — Melon Fashion Group. Befree — это бренд для тех, кто молод внутри. Магазин молодежной женской одежды по демократичным ценам. В ассортименте представлены платья, юбки, шорты, футболки, джемперы, пиджаки, джинсы и аксессуары: сумки, шарфы, бижутерия, носки и колготки.');
    });
    var shop7 = document.getElementById('BORK');
    shop7.addEventListener('click', function () {
        showShopInfo('BORK', '/img/bork.png', 'BORK — международный бренд бытовой техники премиум-класса. Для создания продукции такого уровня BORK привлекает экспертов со всего мира: Швейцарии, Австралии, Японии, Китая и других стран. Техника BORK отмечена во всем мире. Эксклюзивные модели уже завоевали более 50 международных наград в области промышленного дизайна: RedDot Design Award, iF Design Award и др. Разрабатывая новинки, компания добивается совершенства в каждой детали. Познакомиться с коллекцией можно в бутике BORK.');
    });
    var shop8 = document.getElementById('CASIO');
    shop8.addEventListener('click', function () {
        showShopInfo('CASIO', '/img/casio.png', 'CASIO — всемирно известный японский бренд, завоевавший всеобщую любовь и популярность благодаря надёжности, прогрессивности и функциональности.');
    });
    var shop9 = document.getElementById('Gloria Jeans');
    shop9.addEventListener('click', function () {
        showShopInfo('Gloria Jeans', '/img/gj.png', 'Gloria Jeans — динамично развивающийся модный бренд одежды и аксессуаров. Это «Марка №1» в России в 2022 году в категории «сеть магазинов одежды». Магазины Gloria Jeans работают более чем в 300 городах, и сеть растет с каждым днем. Бренд ориентируется на высокий уровень качества, оставаясь доступным по цене.Gloria Jeans регулярно обновляет коллекции в соответствии с последними трендами и желаниями покупателей. знавате о новинках и специальных предложениях на сайте и в социальных сетях.');
    });
    var shop10 = document.getElementById('DUB');
    shop10.addEventListener('click', function () {
        showShopInfo('DUB', '/img/dub.png', 'DUB – это новый бренд одежды для молодых людей, которые любят жизнь и получают от нее удовольствие. Их заряжают встречи с друзьями, хорошая музыка, путешествия и активный образ жизни. Для них комфорт и легкий дух бунтарства – главные ценности, а мода – способ самовыражения.');
    });
    var shop11 = document.getElementById('Famila');
    shop11.addEventListener('click', function () {
        showShopInfo('Famila', '/img/famila.png', 'Офпрайс-универмаг, предлагающий покупателям широкий ассортимент женской, мужской, детской одежды и обуви, игрушек, аксессуаров, товаров для дома и декора с экономией до 85% на каждой покупке.');
    });
    var shop12 = document.getElementById('Acoola');
    shop12.addEventListener('click', function () {
        showShopInfo('Acoola', '/img/acoola.png', 'Acoola — популярная марка одежды, обуви и аксессуаров для детей от 2 до 14 лет. В основе концепции бренда — современный подход к созданию детских коллекций, учитывающий актуальные тенденции моды. Ассортимент бренда включает в себя повседневную, школьную и праздничную одежду самых разных фасонов и стилей, а также широкий выбор аксессуаров, обуви, бельевых и чулочно-носочных изделий.');
    });
    var shop13 = document.getElementById('Haier');
    shop13.addEventListener('click', function () {
        showShopInfo('Haier', '/img/haier.png', 'Haier — китайская торговая марка, под которой производится различная бытовая техника, климатическое оборудование и электроника. В переводе с китайского «haier» означает «море». Компания Haier была основана в 1984 году путем слияния китайской компании Qingdao Refrigerator Co.');
    });
    var shop14 = document.getElementById('AMAZING RED');
    shop14.addEventListener('click', function () {
        showShopInfo('AMAZING RED', '/img/amazingred.png', 'AMAZING RED – мультибрендовый магазин, предлагающая одежду, обувь и аксессуары от популярных спортивных брендов. Основу ассортимента составляют коллекции для бега, йоги, фитнеса, тренинга и трейлраннинга от таких брендов, как PUMA, Nike, New Balance, Reebok, Asics, Street Beat и Hoka. Также в магазине представлены повседневная одежда и обувь для любителей активного образа жизни и поклонников уличной моды.');
    });
    var shop15 = document.getElementById('Аdidas');
    shop15.addEventListener('click', function () {
        showShopInfo('Аdidas', '/img/adidas.png', 'Аdidas — креативный спортивный бренд, призывающий мыслить нестандартно в игре и в повседневной жизни. В магазине adidas представлены одежда, обувь и аксессуары для самых популярных видов спорта. Профессиональные консультанты помогут сделать правильный выбор в зависимости от индивидуальных потребностей покупателя.');
    });
    var shop16 = document.getElementById('Kari');
    shop16.addEventListener('click', function () {
        showShopInfo('Kari', '/img/kari.png', 'Kari — это бренд №1 по продажам обуви в России. Бренд реализует концепцию fast-fashion: предлагает покупателям разнообразный, постоянно обновляющийся ассортимент модной обуви и аксессуаров по демократичным ценам. В Kari представлены коллекции обуви Pierre Cardin, Alessio Nesсa, T.Taccardi и многие другие. Это классический и современный дизайн, натуральные материалы, высокое качество и справедливые цены.');
    });
    var shop17 = document.getElementById('JNS');
    shop17.addEventListener('click', function () {
        showShopInfo('JNS',  '/img/jns.png', 'JNS – российская мультибрендовая сеть одежды и обуви для жизни. В магазине представлены товары известных по всему миру брендов, начиная с джинсовых JNS, Lee, Wrangler, Lee Cooper, заканчивая Lacoste, Diadora, Vans.');
    });

    // Закрытие модального окна при нажатии на кнопку "Закрыть"
    var closeButton = document.getElementById('shopPhoto');
    closeButton.addEventListener('click', function () {
        closeShopInfoModal();
    });
});

function showShopInfo(shopName, photoSrc, description) {
    var shopInfoModal = document.getElementById('shopInfoModal');
    var shopPhoto = document.getElementById('shopPhoto');
    var shopDescription = document.getElementById('shopDescription');

    shopPhoto.src = photoSrc;

    var formattedDescription = formatDescription(description);
    shopDescription.innerHTML = formattedDescription;

    shopPhoto.style.width = '280px';
    shopPhoto.style.height = 'auto';

    shopInfoModal.style.display = 'block';
}

function closeShopInfoModal() {
    var shopInfoModal = document.getElementById('shopInfoModal');
    shopInfoModal.style.display = 'none';
}

function formatDescription(description) {
    var maxLength = 40;

    var words = description.split(' ');

    var currentLine = '';
    var formattedDescription = '';

    for (var i = 0; i < words.length; i++) {
        if ((currentLine + words[i]).length > maxLength) {
            formattedDescription += currentLine + '<br>';
            currentLine = words[i] + ' ';
        } else {
            currentLine += words[i] + ' ';
        }
    }

    formattedDescription += currentLine;

    return formattedDescription;
}