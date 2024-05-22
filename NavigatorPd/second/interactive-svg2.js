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

function handleSearchById(id) {
    // Check if the element with the specified ID exists
    var inputElement = document.getElementById(id);

    if (inputElement !== null) {
        // Ваш код для обработки поиска
        var searchTerm = inputElement.value;
        console.log('Вы выполнили поиск по:', searchTerm);

        // Найти магазин по введенному ID
        var shopElement = document.getElementById(searchTerm);

        if (shopElement !== null) {
            // Если магазин найден, вызвать событие click на нем
            var clickEvent = new Event('click');
            shopElement.dispatchEvent(clickEvent);
        }
    } else {
        console.log('Элемент с ID ' + id + ' не найден.');
    }
}

// Поиск
function performSearch() {
    var shopID = sessionStorage.getItem('searchTerm');
    if (shopID !== null){
        console.log('Вы выполнили поиск по:', shopID);
    // Найти магазин по введенному ID
    var shopElement = document.getElementById(shopID);

    if (shopElement !== null) {
        // Если магазин найден, вызвать событие click на нем
        var clickEvent = new Event('click');
        shopElement.dispatchEvent(clickEvent);
    } else {
        sessionStorage.setItem('searchTerm', searchTerm);
        window.location.href = "/first/firstFloor.html";
    }
    }else{
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
        window.location.href = "/first/firstFloor.html";

    }

    // Дополнительная логика поиска может быть добавлена здесь
}}

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

    var shop18 = document.getElementById('Restore');
    shop18.addEventListener('click', function () {
        showShopInfo('Restore', 'public/img/restore.png', 'Restore: – это территория инноваций и технических чудес для тех, кто ценит комфорт. Из ассортимента самых востребованных мировых брендов restore: тщательно отбирает лучшие модели и исключительные продукты. В магазине представлены товары Apple, Dyson, Bang & Olufsen, Marshall, JBL и многие другие.Преимущества магазина restore: оригинальная продукция, гарантия и надежность, профессиональная консультация при выборе устройств, высокий уровень постпродажного сопровождения');
    });
    var shop19 = document.getElementById('Love Republic');
    shop19.addEventListener('click', function () {
        showShopInfo('Love Republic', 'public/img/loverepublic.png', 'LOVE REPUBLIC – женский lifestyle бренд одежды и аксессуаров middle-сегмента. Девушка LOVE REPUBLIC уверена в себе и амбициозна.Она умеет наслаждаться каждым моментом и знает, что такое истинный гедонизм.Образы, которые она выбирает, помогают раскрыть её внутреннюю энергию, природную чувственность и сексуальность.');
    });
    var shop20 = document.getElementById('Magic Box');
    shop20.addEventListener('click', function () {
        showShopInfo('Magic Box', 'public/img/magicbox.png', 'Magic Box — это сеть торговых точек упаковки подарков.Благодаря хорошо подобранному ассортименту наши сотрудницы могут упаковать любой подарок или подобрать подарочную коробку.А мягкие игрушки и шарики не оставят равнодушным ни одного ребенка.');
    });
    var shop21 = document.getElementById('Motherbear');
    shop21.addEventListener('click', function () {
        showShopInfo('Motherbear', 'public/img/notherbear.png', 'Motherbear - магазин товаров для будущих мам, одежду и обувь для детей с рождения и до 10 лет, товары для кормления и купания малыша, все для детской комнаты и товары для путешествий.');
    });
    var shop22 = document.getElementById('NetWork');
    shop22.addEventListener('click', function () {
        showShopInfo('NetWork', 'public/img/network.png', 'NetWork – Бренд одежды, сочетающей в себе культовый дизайн, гламурную эстетику, строгую элегантность и спортивный шик для мужчин и женщин, которые ценят качество и стиль.');
    });
    var shop23 = document.getElementById('NewYorker');
    shop23.addEventListener('click', function () {
        showShopInfo('NewYorker', 'public/img/newyorker.png', 'Магазин молодежной одежды в стиле жителей Нью-Йорка: джинсы, спортивная одежда — уличая мода, дополненная широким спектром аксессуаров и нижнего белья.');
    });
    var shop24 = document.getElementById('O’STIN');
    shop24.addEventListener('click', function () {
        showShopInfo('O’STIN', 'public/img/ostin.png', 'O’STIN — международный бренд предлагает качественную одежду и аксессуары в стиле casual, включая женский, мужской и детский ассортимент. Ключевую часть коллекции составляет O’STIN Casual — базовый ассортимент на каждый день: стильная, удобная и практичная одежда. Кроме того, есть премиальное направление, а также джинсовая, молодежная и детская линии одежды.');
    });
    var shop25 = document.getElementById('Детский мир');
    shop25.addEventListener('click', function () {
        showShopInfo('Детский мир', 'public/img/детскиймир.png', 'Современный супермаркет включает около 20–30 тысяч наименований товаров детского ассортимента: игрушки, одежда и обувь, товары для новорожденных, канцелярские товары, наборы для творчества, товары для активного отдыха, автокресла, мебель. Магазин работает в среднем ценовом сегменте.');
    });
    var shop26 = document.getElementById('RE');
    shop26.addEventListener('click', function () {
        showShopInfo('RE', 'public/img/re.png', 'RE – это модная одежда, которая отвечает последним модным тенденциям. Базовые и капсульные коллекции, актуальные цвета, а также большой выбор комфортных повседневных образов. Одежда, обувь и аксессуары RE — это отличное качество по доступным ценам.');
    });
    var shop27 = document.getElementById('MAAG');
    shop27.addEventListener('click', function () {
        showShopInfo('MAAG', 'public/img/maag.png', 'MAAG – новый концептуальный бренд для женщин, мужчин и детей, меняющий подход к выбору одежды и объединяющий последние модные тенденции и стиль, неподвластный времени.');
    });
    var shop28 = document.getElementById('SOKOLOV');
    shop28.addEventListener('click', function () {
        showShopInfo('SOKOLOV', 'public/img/sokolov.png', 'SOKOLOV — бренд ювелирных украшений и часов, основанный в 1993 году и на сегодняшний день являющийся одним из самых желанных в России. Известен не только в нашей стране, но и далеко за ее пределами, представлен в десятках стран мира на трех континентах. В центре внимания бренда — совершенство его произведений, принципы высочайшего качества, актуальный дизайн и внимание к каждой детали.');
    });
    var shop29 = document.getElementById('AR Fashion');
    shop29.addEventListener('click', function () {
        showShopInfo('AR Fashion', 'public/img/polo.png', 'AR Fashion – официальный дистрибьютор продукции бренда U.S. Polo Assn. в России. Изделия U.S.Polo Assn. – это прежде всего высокое качество и статус.Являясь воплощением комфорта, красоты и свободы, одежда U.S.Polo Assn.одинаково хорошо смотрится как в офисе, так и в неформальной обстановке или на отдыхе.Бренд U.S.Polo Assn.воплощен в мужской, женской и детской коллекциях одежды, обуви и аксессуаров.');
    });
    var shop30 = document.getElementById('Xiaomi');
    shop30.addEventListener('click', function () {
        showShopInfo('Xiaomi', 'public/img/xiaomi.png', 'Xiaomi — один из ведущих брендов электроники, известный во всем мире. В ассортименте фирменного магазина есть все — от смартфонов и аксессуаров до бытовой техники «Умный дом, ТВ и средств передвижения (самокатов и т.п.). Философия бренда заключается в том, чтобы сделать доступными для всех самые последние технологические достижения.Xiaomi — инновации для каждого');
    });
    var shop31 = document.getElementById('Zolla');
    shop31.addEventListener('click', function () {
        showShopInfo('Zolla', 'public/img/zolo.png', 'Zolla — бренд модной демократичной одежды, где каждый сможет найти для себя образы, которые отражают его настроение и внутренний мир. Zolla — для уютных посиделок с друзьями и для безумных праздничных вечеринок, для летних прогулок по парку и для веселья на зимнем катке, для романтического свидания и для вечера с любимой книгой. Zolla стремится сделать моду доступной. Разрабатывая коллекции, дизайнеры zolla адаптируют последние мировые тренды, помогая клиентам найти и выработать свой собственный стиль.');
    });
    var shop32 = document.getElementById('oodji');
    shop32.addEventListener('click', function () {
        showShopInfo('oodji', 'public/img/oodji.png', 'Ассортимент магазина представлен женской и мужской коллекциями одежды. Линия Ultra создана для молодых, активных девушек и юношей, а линия Collection понравится покупателям, которые ценят элегантность и эстетику.');
    });
    var shop33 = document.getElementById('МегаФон');
    shop33.addEventListener('click', function () {
        showShopInfo('МегаФон', 'public/img/мегафон.png', 'Салон крупнейшего оператора связи «МегаФон» оказывает следующие услуги: заключение и переоформление договоров, работа с ошибочными платежами, предоставление счета, счета-фактуры, акта, детализации счета, управление тарифным планом (подключение и отключение опций), блокировка номера, денежный перевод, прием претензий, восстановление номера');
    });
    var shop34 = document.getElementById('ЛЭтуаль');
    shop34.addEventListener('click', function () {
        showShopInfo('ЛЭтуаль', 'public/img/летуаль.png', 'ЛЭтуаль – модная территория красоты для стильных и современных!Более 20 лет сеть магазинов ЛЭтуаль – лидер на российском косметическом рынке. Почти 1000 магазинов ЛЭтуаль по всей России обеспечивают высокий уровень сервиса и создают условия для комфортного бьюти - шопинга. Ежедневно клиентов встречают профессиональные консультанты, которые проходят обучение на международных тренингах, и помогают сделать выбор среди великолепного ассортимента сети магазинов ЛЭтуаль. Ароматы для мужчин и женщин, средства по уходу за кожей и волосами, декоративная косметика от мировых брендов, а так же коллекция собственной торговой марки - всё лучшее из мира красоты только в ЛЭтуаль!');
    });
    var shop35 = document.getElementById('М.Видео');
    shop35.addEventListener('click', function () {
        showShopInfo('М.Видео', 'public/img/мвидио.png', '«М.Видео» — лидер среди розничных сетей по продаже электроники и бытовой техники в России и одна из крупнейших европейских компаний в этом сегменте. Товарный ассортимент магазинов «М.Видео» превышает 20 тысяч наименований техники: аудио/видео и цифрового направлений, мелкой и крупной бытовой электроники, товаров для развлечения и аксессуаров. Компания предлагает клиентам высококлассную сервисную поддержку под брендом «М.Сервис».');
    });
    var shop36 = document.getElementById('Золотое Яблоко');
    shop36.addEventListener('click', function () {
        showShopInfo('Золотое Яблоко', 'public/img/золотоеяблоко.png', 'Парфюмерный супермаркет «Золотое Яблоко» – это огромный магазин косметики и парфюмерии с широким ассортиментом брендов сегмента масс-маркет, люкс, профессиональной косметики для волос, аптечных брендов и БАДов, азиатской и органической косметики.');
    });
    var shop37 = document.getElementById('МТС');
    shop37.addEventListener('click', function () {
        showShopInfo('МТС', 'public/img/мтс.png', 'МТС является одним из ведущих сотовых операторов в России и странах СНГ. Компания оказывает услуги связи, передачи данных и доступа в интернет, предлагает новые тарифные планы и инновационные сервисы для широкого круга частных и корпоративных абонентов.');
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