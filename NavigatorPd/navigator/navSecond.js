var oUl = document.getElementById("ul1");
        var aLi = document.getElementsByTagName("li");
var initialMap = [
                2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,2,2,2,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,2,2,2,2,2,2,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,2,
                2,2,0,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,2,0,2,0,2,0,0,0,0,0,0,0,0,2,
                2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,
                2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,
                2,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,
                2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,0,0,0,0,0,0,0,2,
                2,2,0,2,2,2,2,2,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,2,2,2,2,2,2,2,0,2,2,2,2,0,2,0,2,2,2,2,2,0,2,2,2,2,
                2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,2,2,2,0,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                0,0,2,0,2,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,2,0,2,0,2,0,0,0,0,0,0,0,2,2,2,2,0,2,2,2,2,2,0,2,2,2,0,2,2,2,2,2,0,2,2,2,2,0,0,0,0,0,0,0,0,2,
                2,0,2,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,2,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,2,2,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,2,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,0,0,2,2,2,2,2,2,2,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,0,0,2,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,2,2,2,2,2,2,2,2,2,2,2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2,2,0,0,0,2,
                2,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,2,0,0,0,2,0,0,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,2,0,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,2,0,0,0,2,
                2,0,2,0,0,0,2,2,2,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,0,2,0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,0,2,0,0,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,2,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,2,0,2,2,2,2,2,2,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,0,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0,2,2,2,2,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,2,0,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,
                2,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,2,0,0,2,2,0,2,
                2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
                2,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,2,0,0,2,
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
    if (id === "Restore") {
        map[624] = 1;
    } else if (id === "Loverepublic") {
        map[493] = 1;
    } else if (id === "Magic Box") {
        map[497] = 1;
    } else if (id === "Motherbear") {
        map[510] = 1;
    } else if (id === "NetWork") {
        map[523] = 1;
    } else if (id === "New Yorker") {
        map[1019] = 1;
    } else if (id === "O’STIN") {
        map[731] = 1;
    } else if (id === "Детский мир") {
        map[690] = 1;
    } else if (id === "RE") {
        map[696] = 1;
    } else if (id === "MAAG") {
        map[700] = 1;
    } else if (id === "SOKOLOV") {
        map[706] = 1;
    } else if (id === "Polo") {
        map[1600] = 1;
    } else if (id === "Xiaomi") {
        map[1604] = 1;
    } else if (id === "Zolla") {
        map[1608] = 1;
    } else if (id === "oodji") {
        map[1612] = 1;
    } else if (id === "Мегафон") {
        map[1617] = 1;
    } else if (id === "Лэтуаль") {
        map[1740] = 1;
    }else if (id === "М.Видео") {
        map[1746] = 1;
    }else if (id === "Золотое яблоко") {
        map[1756] = 1;
    }else if (id === "МТС") {
        map[1866] = 1;
    }else if (id === "Эскалатор (2 Этаж)") {
        map[858] = 1;
    }else if (id === "Лестница (2 Этаж)") {
        map[517] = 1;
    }else if (id === "Лестница2 (2 Этаж)") {
        map[1870] = 1;
    }else if (id === "Туалет (2 Этаж)") {
        map[1164] = 1;
    }
}

// Для точки Б
function updatePointB(id) {
    if (id === "Restore") {
        map[624] = 3;
    } else if (id === "Loverepublic") {
        map[493] = 3;
    } else if (id === "Magic Box") {
        map[497] = 3;
    } else if (id === "Motherbear") {
        map[510] = 3;
    } else if (id === "NetWork") {
        map[523] = 3;
    } else if (id === "New Yorker") {
        map[1019] = 3;
    } else if (id === "O’STIN") {
        map[731] = 3;
    } else if (id === "Детский мир") {
        map[690] = 3;
    } else if (id === "RE") {
        map[696] = 3;
    } else if (id === "MAAG") {
        map[700] = 3;
    } else if (id === "SOKOLOV") {
        map[706] = 3;
    } else if (id === "Polo") {
        map[1600] = 3;
    } else if (id === "Xiaomi") {
        map[1604] = 3;
    } else if (id === "Zolla") {
        map[1608] = 3;
    } else if (id === "oodji") {
        map[1612] = 3;
    } else if (id === "Мегафон") {
        map[1617] = 3;
    } else if (id === "Лэтуаль") {
        map[1740] = 3;
    }else if (id === "М.Видео") {
        map[1746] = 3;
    }else if (id === "Золотое яблоко") {
        map[1756] = 3;
    }else if (id === "МТС") {
        map[1866] = 3;
    }else if (id === "Эскалатор (2 Этаж)") {
        map[858] = 3;
    }else if (id === "Лестница (2 Этаж)") {
        map[517] = 3;
    }else if (id === "Лестница2 (2 Этаж)") {
        map[1870] = 3;
    }else if (id === "Туалет (2 Этаж)") {
        map[1164] = 3;
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

    
    
    var shop18 = document.getElementById('shop18');
    shop18.addEventListener('click', function () {
        showShopInfo('Shop 18', '/img/restore.png', 'Restore: – это территория инноваций и технических чудес для тех, кто ценит комфорт. Из ассортимента самых востребованных мировых брендов restore: тщательно отбирает лучшие модели и исключительные продукты. В магазине представлены товары Apple, Dyson, Bang & Olufsen, Marshall, JBL и многие другие.Преимущества магазина restore: оригинальная продукция, гарантия и надежность, профессиональная консультация при выборе устройств, высокий уровень постпродажного сопровождения');
    });
    var shop19 = document.getElementById('shop19');
    shop19.addEventListener('click', function () {
        showShopInfo('Shop 19', '/img/loverepublic.png', 'LOVE REPUBLIC – женский lifestyle бренд одежды и аксессуаров middle-сегмента. Девушка LOVE REPUBLIC уверена в себе и амбициозна.Она умеет наслаждаться каждым моментом и знает, что такое истинный гедонизм.Образы, которые она выбирает, помогают раскрыть её внутреннюю энергию, природную чувственность и сексуальность.');
    });
    var shop20 = document.getElementById('shop20');
    shop20.addEventListener('click', function () {
        showShopInfo('Shop 20', '/img/magicbox.png', 'Magic Box — это сеть торговых точек упаковки подарков.Благодаря хорошо подобранному ассортименту наши сотрудницы могут упаковать любой подарок или подобрать подарочную коробку.А мягкие игрушки и шарики не оставят равнодушным ни одного ребенка.');
    });
    var shop21 = document.getElementById('shop21');
    shop21.addEventListener('click', function () {
        showShopInfo('Shop 21', '/img/notherbear.png', 'Motherbear - магазин товаров для будущих мам, одежду и обувь для детей с рождения и до 10 лет, товары для кормления и купания малыша, все для детской комнаты и товары для путешествий.');
    });
    var shop22 = document.getElementById('shop22');
    shop22.addEventListener('click', function () {
        showShopInfo('Shop 22', '/img/network.png', 'NetWork – Бренд одежды, сочетающей в себе культовый дизайн, гламурную эстетику, строгую элегантность и спортивный шик для мужчин и женщин, которые ценят качество и стиль.');
    });
    var shop23 = document.getElementById('shop23');
    shop23.addEventListener('click', function () {
        showShopInfo('Shop 23', '/img/newyorker.png', 'Магазин молодежной одежды в стиле жителей Нью-Йорка: джинсы, спортивная одежда — уличая мода, дополненная широким спектром аксессуаров и нижнего белья.');
    });
    var shop24 = document.getElementById('shop24');
    shop24.addEventListener('click', function () {
        showShopInfo('Shop 24', '/img/ostin.png', 'O’STIN — международный бренд предлагает качественную одежду и аксессуары в стиле casual, включая женский, мужской и детский ассортимент. Ключевую часть коллекции составляет O’STIN Casual — базовый ассортимент на каждый день: стильная, удобная и практичная одежда. Кроме того, есть премиальное направление, а также джинсовая, молодежная и детская линии одежды.');
    });
    var shop25 = document.getElementById('shop25');
    shop25.addEventListener('click', function () {
        showShopInfo('Shop 25', '/img/детскиймир.png', 'Современный супермаркет включает около 20–30 тысяч наименований товаров детского ассортимента: игрушки, одежда и обувь, товары для новорожденных, канцелярские товары, наборы для творчества, товары для активного отдыха, автокресла, мебель. Магазин работает в среднем ценовом сегменте.');
    });
    var shop26 = document.getElementById('shop26');
    shop26.addEventListener('click', function () {
        showShopInfo('Shop 26', '/img/re.png', 'RE – это модная одежда, которая отвечает последним модным тенденциям. Базовые и капсульные коллекции, актуальные цвета, а также большой выбор комфортных повседневных образов. Одежда, обувь и аксессуары RE — это отличное качество по доступным ценам.');
    });
    var shop27 = document.getElementById('shop27');
    shop27.addEventListener('click', function () {
        showShopInfo('Shop 27', '/img/maag.png', 'MAAG – новый концептуальный бренд для женщин, мужчин и детей, меняющий подход к выбору одежды и объединяющий последние модные тенденции и стиль, неподвластный времени.');
    });
    var shop28 = document.getElementById('shop28');
    shop28.addEventListener('click', function () {
        showShopInfo('Shop 28', '/img/sokolov.png', 'SOKOLOV — бренд ювелирных украшений и часов, основанный в 1993 году и на сегодняшний день являющийся одним из самых желанных в России. Известен не только в нашей стране, но и далеко за ее пределами, представлен в десятках стран мира на трех континентах. В центре внимания бренда — совершенство его произведений, принципы высочайшего качества, актуальный дизайн и внимание к каждой детали.');
    });
    var shop29 = document.getElementById('shop29');
    shop29.addEventListener('click', function () {
        showShopInfo('Shop 29', '/img/polo.png', 'AR Fashion – официальный дистрибьютор продукции бренда U.S. Polo Assn. в России. Изделия U.S.Polo Assn. – это прежде всего высокое качество и статус.Являясь воплощением комфорта, красоты и свободы, одежда U.S.Polo Assn.одинаково хорошо смотрится как в офисе, так и в неформальной обстановке или на отдыхе.Бренд U.S.Polo Assn.воплощен в мужской, женской и детской коллекциях одежды, обуви и аксессуаров.');
    });
    var shop30 = document.getElementById('shop30');
    shop30.addEventListener('click', function () {
        showShopInfo('Shop 30', '/img/xiaomi.png', 'Xiaomi — один из ведущих брендов электроники, известный во всем мире. В ассортименте фирменного магазина есть все — от смартфонов и аксессуаров до бытовой техники «Умный дом, ТВ и средств передвижения (самокатов и т.п.). Философия бренда заключается в том, чтобы сделать доступными для всех самые последние технологические достижения.Xiaomi — инновации для каждого');
    });
    var shop31 = document.getElementById('shop31');
    shop31.addEventListener('click', function () {
        showShopInfo('Shop 31', '/img/zolo.png', 'Zolla — бренд модной демократичной одежды, где каждый сможет найти для себя образы, которые отражают его настроение и внутренний мир. Zolla — для уютных посиделок с друзьями и для безумных праздничных вечеринок, для летних прогулок по парку и для веселья на зимнем катке, для романтического свидания и для вечера с любимой книгой. Zolla стремится сделать моду доступной. Разрабатывая коллекции, дизайнеры zolla адаптируют последние мировые тренды, помогая клиентам найти и выработать свой собственный стиль.');
    });
    var shop32 = document.getElementById('shop32');
    shop32.addEventListener('click', function () {
        showShopInfo('Shop 32', '/img/oodji.png', 'Ассортимент магазина представлен женской и мужской коллекциями одежды. Линия Ultra создана для молодых, активных девушек и юношей, а линия Collection понравится покупателям, которые ценят элегантность и эстетику.');
    });
    var shop33 = document.getElementById('shop33');
    shop33.addEventListener('click', function () {
        showShopInfo('Shop 33', '/img/мегафон.png', 'Салон крупнейшего оператора связи «МегаФон» оказывает следующие услуги: заключение и переоформление договоров, работа с ошибочными платежами, предоставление счета, счета-фактуры, акта, детализации счета, управление тарифным планом (подключение и отключение опций), блокировка номера, денежный перевод, прием претензий, восстановление номера');
    });
    var shop34 = document.getElementById('shop34');
    shop34.addEventListener('click', function () {
        showShopInfo('Shop 34', '/img/летуаль.png', 'ЛЭтуаль – модная территория красоты для стильных и современных!Более 20 лет сеть магазинов ЛЭтуаль – лидер на российском косметическом рынке. Почти 1000 магазинов ЛЭтуаль по всей России обеспечивают высокий уровень сервиса и создают условия для комфортного бьюти - шопинга. Ежедневно клиентов встречают профессиональные консультанты, которые проходят обучение на международных тренингах, и помогают сделать выбор среди великолепного ассортимента сети магазинов ЛЭтуаль. Ароматы для мужчин и женщин, средства по уходу за кожей и волосами, декоративная косметика от мировых брендов, а так же коллекция собственной торговой марки - всё лучшее из мира красоты только в ЛЭтуаль!');
    });
    var shop35 = document.getElementById('shop35');
    shop35.addEventListener('click', function () {
        showShopInfo('Shop 35', '/img/мвидио.png', '«М.Видео» — лидер среди розничных сетей по продаже электроники и бытовой техники в России и одна из крупнейших европейских компаний в этом сегменте. Товарный ассортимент магазинов «М.Видео» превышает 20 тысяч наименований техники: аудио/видео и цифрового направлений, мелкой и крупной бытовой электроники, товаров для развлечения и аксессуаров. Компания предлагает клиентам высококлассную сервисную поддержку под брендом «М.Сервис».');
    });
    var shop36 = document.getElementById('shop36');
    shop36.addEventListener('click', function () {
        showShopInfo('Shop 36', '/img/золотоеяблоко.png', 'Парфюмерный супермаркет «Золотое Яблоко» – это огромный магазин косметики и парфюмерии с широким ассортиментом брендов сегмента масс-маркет, люкс, профессиональной косметики для волос, аптечных брендов и БАДов, азиатской и органической косметики.');
    });
    var shop37 = document.getElementById('shop37');
    shop37.addEventListener('click', function () {
        showShopInfo('Shop 37', '/img/мтс.png', 'МТС является одним из ведущих сотовых операторов в России и странах СНГ. Компания оказывает услуги связи, передачи данных и доступа в интернет, предлагает новые тарифные планы и инновационные сервисы для широкого круга частных и корпоративных абонентов.');
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