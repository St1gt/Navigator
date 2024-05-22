var oUl = document.getElementById("ul1");
        var aLi = document.getElementsByTagName("li");
var initialMap = [
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,0,2,0,0,0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,2,2,0,2,0,0,2,0,0,2,2,2,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,0,2,2,0,0,2,2,0,0,2,
                2,0,0,0,0,2,2,2,2,2,0,0,0,0,2,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,2,2,0,2,2,2,0,0,2,
                2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,2,2,0,2,2,2,2,0,2,2,0,2,2,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,2,2,2,
                2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,2,0,0,0,2,
                2,0,0,2,2,0,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,
                2,0,0,2,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,
                2,0,0,2,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,
                2,0,0,2,0,0,0,0,0,0,0,2,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,0,0,0,2,
                2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,0,0,0,0,2,0,0,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,
                2,2,0,0,0,2,0,0,2,0,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,2,0,0,0,2,2,2,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,2,0,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,0,2,0,0,2,0,0,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,2,2,2,2,2,2,2,2,0,0,0,0,0,2,0,0,0,2,
                2,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,0,0,2,0,2,2,2,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,2,
                2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,0,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,2,2,2,2,2,
                2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,2,0,0,2,2,0,2,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,2,2,0,2,2,2,
                2,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,0,2,
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2
            ]
// Создаем копию исходной карты для работы с ней
var map = Array.from(initialMap);
// Функция для установки точек А и Б
function setPoints() {
    // Сброс карты к исходному состоянию
    resetMap();
  
    // Обновление точек А и Б на основе ввода пользователя
    var pointAId = document.getElementById('pointAInput').value;
    var pointBId = document.getElementById('pointBInput').value;
    updatePointA(pointAId);
    updatePointB(pointBId);
  }
  function resetMap() {
    // Копируем исходную карту обратно в рабочую карту
    map = Array.from(initialMap);
  }
  
// Функция для инициализации карты и поиска маршрута
function initMapAndSearch() {
    setPoints(); // Установка точек А и Б
    createMap(); // Создание карты
    startSearch(); // Поиск маршрута
}

// Добавляем обработчик события для кнопки "Найти маршрут"
var findRouteButton = document.getElementById('findRouteButton');
findRouteButton.addEventListener('click', function () {
  // Установка точек и поиск маршрута с использованием обновленной карты
  setPoints();
  initMapAndSearch();
});

function getDiagonalSize() {
    var width = window.screen.width;
    var height = window.screen.height;

    return Math.sqrt(width * width + height * height);
}

function createMap() {
    var diagonalSize = getDiagonalSize();
    var liSize;

    if (diagonalSize > 2000) {
        liSize = 15;
    } else if (diagonalSize > 1000) {
        liSize = 12;
    } else {
        liSize = 12;
    }

    oUl.innerHTML = ""; // Очистка содержимого oUl перед созданием новой карты

    for (var i = 0; i < map.length; i++) {
        var oLi = document.createElement("li");
        oLi.style.width = liSize + "px";
        oLi.style.height = liSize + "px";
        oUl.appendChild(oLi);

        if (map[i] == 1) {
            oLi.className = "style1";
        } else if (map[i] == 2) {
            oLi.className = "style2";
        } else if (map[i] == 3) {
            oLi.className = "style3";
        }
    }

    oUl.style.width = 48 * (liSize + 1) + 1 + "px"; // надо изменить на 40 чтобы маршрут строился на карте 40 на 40
}


function startSearch() {
    var startNode = findNode(1);
    var endNode = findNode(3);

    var path = findShortestPath(startNode, endNode);

    // Проверьте, что путь не пуст перед его пометкой
    if (path.length > 0) {
        markPath(path);
    } else {
        console.error("Допустимый путь не найден.");
    }
}



function findNode(value) {
    for (var i = 0; i < aLi.length; i++) {
        if (map[i] == value) {
            return { x: i % 48, y: Math.floor(i / 48) };
        }
    }
    return { x: -1, y: -1 }; // Вернуть узел по умолчанию или обработать случай с null соответствующим образом
}


        function findShortestPath(start, end) {
            // Гарантируйте, что начальный и конечный узлы действительны
    if (!start || !end) {
        console.error("Недопустимый начальный или конечный узел.");
        return [];
    }
            var openSet = [start];
            var cameFrom = {};
            var gScore = {};
            var fScore = {};

            for (var i = 0; i < map.length; i++) {
                gScore[i] = Infinity;
                fScore[i] = Infinity;
            }

            gScore[start.y * 48 + start.x] = 0;
            fScore[start.y * 48 + start.x] = heuristic(start, end);

            while (openSet.length > 0) {
                var current = minFScore(openSet, fScore);

                if (current.x === end.x && current.y === end.y) {
                    return reconstructPath(cameFrom, current);
                }

                openSet = openSet.filter(function (el) {
                    return el.x !== current.x || el.y !== current.y;
                });

                var neighbors = getNeighbors(current);

                for (var j = 0; j < neighbors.length; j++) {
                    var neighbor = neighbors[j];
                    var tentativeGScore = gScore[current.y * 48 + current.x] + 1;

                    if (tentativeGScore < gScore[neighbor.y * 48 + neighbor.x]) {
                        cameFrom[neighbor.y * 48 + neighbor.x] = current;
                        gScore[neighbor.y * 48 + neighbor.x] = tentativeGScore;
                        fScore[neighbor.y * 48 + neighbor.x] =
                            gScore[neighbor.y * 48 + neighbor.x] +
                            heuristic(neighbor, end);

                        if (!openSet.some(function (el) {
                            return el.x === neighbor.x && el.y === neighbor.y;
                        })) {
                            openSet.push(neighbor);
                        }
                    }
                }
            }

            return [];
        }

        function heuristic(a, b) {
            return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
        }

        function minFScore(set, fScore) {
            var min = Infinity;
            var minNode = null;

            for (var i = 0; i < set.length; i++) {
                var node = set[i];
                if (fScore[node.y * 48 + node.x] < min) {
                    min = fScore[node.y * 48 + node.x];
                    minNode = node;
                }
            }

            return minNode;
        }

        function getNeighbors(node) {
    var neighbors = [];
    if (node.x > 0 && map[node.y * 48 + node.x - 1] !== 2) {
        neighbors.push({ x: node.x - 1, y: node.y });
    }
    if (node.x < 47 && map[node.y * 48 + node.x + 1] !== 2) {  // надо изменить на 39 чтобы маршрут строился на карте 40 на 40
        neighbors.push({ x: node.x + 1, y: node.y });
    }
    if (node.y > 0 && map[(node.y - 1) * 48 + node.x] !== 2) {
        neighbors.push({ x: node.x, y: node.y - 1 });
    }
    if (node.y < 47 && map[(node.y + 1) * 48 + node.x] !== 2) {  // надо изменить на 39 чтобы маршрут строился на карте 40 на 40
        neighbors.push({ x: node.x, y: node.y + 1 });
    }
    return neighbors;
}


        function reconstructPath(cameFrom, current) {
            var path = [current];
            while (cameFrom[current.y * 48 + current.x]) {
                current = cameFrom[current.y * 48 + current.x];
                path.unshift(current);
            }
            return path;
        }

        function markPath(path) {
            for (var i = 0; i < path.length; i++) {
                var index = path[i].y * 48 + path[i].x;
                var element = aLi[index];
        
                // Проверка, существует ли элемент и имеет ли свойство classList
                if (element && element.classList) {
                    element.classList.add("path");
                } else {
                    console.error("Ошибка при маркировке пути: элемент или classList не найдены");
                }
            }
        }

// НАВИГАЦИЯ. точки для карты map=======================================================================================================================
initMapAndSearch();

// Для точки А
function updatePointA(id) {
    if (id === "Главный вход") {
        map[425] = 1;
    } else if (id === "DNS") {
        map[554] = 1;
    } else if (id === "5 карманов") {
        map[679] = 1;
    } else if (id === "Hoff") {
        map[687] = 1;
    } else if (id === "Guess") {
        map[691] = 1;
    } else if (id === "Askona") {
        map[697] = 1;
    } else if (id === "Befree") {
        map[705] = 1;
    } else if (id === "BORK") {
        map[1599] = 1;
    } else if (id === "CASIO") {
        map[1603] = 1;
    } else if (id === "Gloria Jeans") {
        map[1607] = 1;
    } else if (id === "DUB") {
        map[1611] = 1;
    } else if (id === "Acoola") {
        map[1617] = 1;
    } else if (id === "Familia") {
        map[1237] = 1;
    } else if (id === "Haier") {
        map[1740] = 1;
    } else if (id === "Amazing Red") {
        map[1745] = 1;
    } else if (id === "Adidas") {
        map[1753] = 1;
    } else if (id === "Kari") {
        map[1761] = 1;
    }else if (id === "JNS") {
        map[1865] = 1;
    }else if (id === "Эскалатор (1 Этаж)") {
        map[1050] = 1;
    }else if (id === "Лестница (у входа)") {
        map[132] = 1;
    }else if (id === "Лестница") {
        map[1868] = 1;
    }else if (id === "Туалет (у входа)") {
        map[321] = 1;
    }else if (id === "Туалет") {
        map[1163] = 1;
    }
}

// Для точки Б
function updatePointB(id) {
    if (id === "Главный вход") {
        map[377] = 3;
    } else if (id === "DNS") {
        map[554] = 3;
    } else if (id === "5 карманов") {
        map[679] = 3;
    } else if (id === "Hoff") {
        map[687] = 3;
    } else if (id === "Guess") {
        map[691] = 3;
    } else if (id === "Askona") {
        map[697] = 3;
    } else if (id === "Befree") {
        map[705] = 3;
    } else if (id === "BORK") {
        map[1599] = 3;
    } else if (id === "CASIO") {
        map[1603] = 3;
    } else if (id === "Gloria Jeans") {
        map[1607] = 3;
    } else if (id === "DUB") {
        map[1611] = 3;
    } else if (id === "Acoola") {
        map[1617] = 3;
    } else if (id === "Familia") {
        map[1237] = 3;
    } else if (id === "Haier") {
        map[1740] = 3;
    } else if (id === "Amazing Red") {
        map[1745] = 3;
    } else if (id === "Adidas") {
        map[1753] = 3;
    } else if (id === "Kari") {
        map[1761] = 3;
    }else if (id === "JNS") {
        map[1865] = 3;
    }else if (id === "Эскалатор (1 Этаж)") {
        map[1050] = 3;
    }else if (id === "Лестница (у входа)") {
        map[132] = 3;
    }else if (id === "Лестница") {
        map[1868] = 3;
    }else if (id === "Туалет (у входа)") {
        map[321] = 3;
    }else if (id === "Туалет") {
        map[1163] = 3;
    }
}
// Пример использования (вызов этих функций после ввода id в соответствующие поля):
var pointAId = document.getElementById('pointAInput').value;
  var pointBId = document.getElementById('pointBInput').value;
  updatePointA(pointAId);
  updatePointB(pointBId);

document.addEventListener('DOMContentLoaded', function () {
    var findRouteButton = document.getElementById('findRouteButton');
    findRouteButton.addEventListener('click', function () {
        var pointAId = document.getElementById('pointAInput').value;
        var pointBId = document.getElementById('pointBInput').value;

        updatePointA(pointAId);
        updatePointB(pointBId);

        initMapAndSearch();
    });
});
// НАВИГАЦИЯ. точки для карты map======================================================================================================================
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
    var shop1 = document.getElementById('shop1');
    shop1.addEventListener('click', function () {
        showShopInfo('Shop 1', '/img/dns.png', 'Компания DNS является одним из лидеров цифрового ритейла России. Для Вас космический ассортимент: компьютеры, ноутбуки, смартфоны, телевизоры, аксессуары и многое другое. Предназначение DNS – быть лучшим проводником товара от производителя к покупателю!');
    });
    var shop2 = document.getElementById('shop2');
    shop2.addEventListener('click', function () {
        showShopInfo('Shop 2', '/img/Karmanobv.jpg', '«5 КармаNов» — это сеть розничных мультибрендовых магазинов джинсовой одежды на каждый день оригинального дизайна и высокого качества.');
    });
    var shop3 = document.getElementById('shop3');
    shop3.addEventListener('click', function () {
        showShopInfo('Shop 3', '/img/hoff.png', 'Сеть гипермаркетов Hoff — это одна из крупнейших российских и динамично развивающихся мебельных сетей. Это единственная российская сеть мебели и аксессуаров для дома, работающая в формате гипермаркета. Наши гипермаркеты имеют уникальный для российского рынка формат - "Все в одном месте".Мы предлагаем комплексные интерьерные решения на основе широкого мультибрендового ассортимента. Помимо этого, вы всегда можете совершить заказ он - лайн на сайте hoff.ru или через приложение');
    });
    var shop4 = document.getElementById('shop4');
    shop4.addEventListener('click', function () {
        showShopInfo('Shop 4', '/img/guess.png', 'GUESS — американский бренд, который специализируется на производстве одежды, аксессуаров, обуви, ювелирных украшений, солнцезащитных очков и парфюмерии для женщин и мужчин.');
    });
    var shop5 = document.getElementById('shop5');
    shop5.addEventListener('click', function () {
        showShopInfo('Shop 5', '/img/askona.png', 'Фабрика товаров для здорового сна Askona — лидер индустрии товаров для сна в России и крупнейшая фабрика по производству ортопедических матрасов в Восточной Европе.');
    });
    var shop6 = document.getElementById('shop6');
    shop6.addEventListener('click', function () {
        showShopInfo('Shop 6', '/img/befree.png', 'Один из брендов крупнейшей fashion-компании на российском рынке — Melon Fashion Group. Befree — это бренд для тех, кто молод внутри. Магазин молодежной женской одежды по демократичным ценам. В ассортименте представлены платья, юбки, шорты, футболки, джемперы, пиджаки, джинсы и аксессуары: сумки, шарфы, бижутерия, носки и колготки.');
    });
    var shop7 = document.getElementById('shop7');
    shop7.addEventListener('click', function () {
        showShopInfo('Shop 7', '/img/bork.png', 'BORK — международный бренд бытовой техники премиум-класса. Для создания продукции такого уровня BORK привлекает экспертов со всего мира: Швейцарии, Австралии, Японии, Китая и других стран. Техника BORK отмечена во всем мире. Эксклюзивные модели уже завоевали более 50 международных наград в области промышленного дизайна: RedDot Design Award, iF Design Award и др. Разрабатывая новинки, компания добивается совершенства в каждой детали. Познакомиться с коллекцией можно в бутике BORK.');
    });
    var shop8 = document.getElementById('shop8');
    shop8.addEventListener('click', function () {
        showShopInfo('Shop 8', '/img/casio.png', 'CASIO — всемирно известный японский бренд, завоевавший всеобщую любовь и популярность благодаря надёжности, прогрессивности и функциональности.');
    });
    var shop9 = document.getElementById('shop9');
    shop9.addEventListener('click', function () {
        showShopInfo('Shop 9', '/img/gj.png', 'Gloria Jeans — динамично развивающийся модный бренд одежды и аксессуаров. Это «Марка №1» в России в 2022 году в категории «сеть магазинов одежды». Магазины Gloria Jeans работают более чем в 300 городах, и сеть растет с каждым днем. Бренд ориентируется на высокий уровень качества, оставаясь доступным по цене.Gloria Jeans регулярно обновляет коллекции в соответствии с последними трендами и желаниями покупателей. знавате о новинках и специальных предложениях на сайте и в социальных сетях.');
    });
    var shop10 = document.getElementById('shop10');
    shop10.addEventListener('click', function () {
        showShopInfo('Shop 10', '/img/dub.png', 'DUB – это новый бренд одежды для молодых людей, которые любят жизнь и получают от нее удовольствие. Их заряжают встречи с друзьями, хорошая музыка, путешествия и активный образ жизни. Для них комфорт и легкий дух бунтарства – главные ценности, а мода – способ самовыражения.');
    });
    var shop11 = document.getElementById('shop11');
    shop11.addEventListener('click', function () {
        showShopInfo('Shop 11', '/img/famila.png', 'Офпрайс-универмаг, предлагающий покупателям широкий ассортимент женской, мужской, детской одежды и обуви, игрушек, аксессуаров, товаров для дома и декора с экономией до 85% на каждой покупке.');
    });
    var shop12 = document.getElementById('shop12');
    shop12.addEventListener('click', function () {
        showShopInfo('Shop 12', '/img/acoola.png', 'Acoola — популярная марка одежды, обуви и аксессуаров для детей от 2 до 14 лет. В основе концепции бренда — современный подход к созданию детских коллекций, учитывающий актуальные тенденции моды. Ассортимент бренда включает в себя повседневную, школьную и праздничную одежду самых разных фасонов и стилей, а также широкий выбор аксессуаров, обуви, бельевых и чулочно-носочных изделий.');
    });
    var shop13 = document.getElementById('shop13');
    shop13.addEventListener('click', function () {
        showShopInfo('Shop 13', '/img/haier.png', 'Haier — китайская торговая марка, под которой производится различная бытовая техника, климатическое оборудование и электроника. В переводе с китайского «haier» означает «море». Компания Haier была основана в 1984 году путем слияния китайской компании Qingdao Refrigerator Co.');
    });
    var shop14 = document.getElementById('shop14');
    shop14.addEventListener('click', function () {
        showShopInfo('Shop 14', '/img/amazingred.png', 'AMAZING RED – мультибрендовый магазин, предлагающая одежду, обувь и аксессуары от популярных спортивных брендов. Основу ассортимента составляют коллекции для бега, йоги, фитнеса, тренинга и трейлраннинга от таких брендов, как PUMA, Nike, New Balance, Reebok, Asics, Street Beat и Hoka. Также в магазине представлены повседневная одежда и обувь для любителей активного образа жизни и поклонников уличной моды.');
    });
    var shop15 = document.getElementById('shop15');
    shop15.addEventListener('click', function () {
        showShopInfo('Shop 15', '/img/adidas.png', 'Аdidas — креативный спортивный бренд, призывающий мыслить нестандартно в игре и в повседневной жизни. В магазине adidas представлены одежда, обувь и аксессуары для самых популярных видов спорта. Профессиональные консультанты помогут сделать правильный выбор в зависимости от индивидуальных потребностей покупателя.');
    });
    var shop16 = document.getElementById('shop16');
    shop16.addEventListener('click', function () {
        showShopInfo('Shop 16', '/img/kari.png', 'Kari — это бренд №1 по продажам обуви в России. Бренд реализует концепцию fast-fashion: предлагает покупателям разнообразный, постоянно обновляющийся ассортимент модной обуви и аксессуаров по демократичным ценам. В Kari представлены коллекции обуви Pierre Cardin, Alessio Nesсa, T.Taccardi и многие другие. Это классический и современный дизайн, натуральные материалы, высокое качество и справедливые цены.');
    });
    var shop17 = document.getElementById('shop17');
    shop17.addEventListener('click', function () {
        showShopInfo('Shop 17',  '/img/jns.png', 'JNS – российская мультибрендовая сеть одежды и обуви для жизни. В магазине представлены товары известных по всему миру брендов, начиная с джинсовых JNS, Lee, Wrangler, Lee Cooper, заканчивая Lacoste, Diadora, Vans.');
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