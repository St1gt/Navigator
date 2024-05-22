const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// Подключение к базе данных PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nav',
    password: 'mysql',
    port: 5432,
});

app.use(bodyParser.json());

// Middleware для обслуживания статических файлов
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/search', async (req, res) => {
    const searchTerm = req.query.term.toLowerCase();
    const categories = req.query.categories ? req.query.categories.split(',') : [];

    try {
        let query = 'SELECT DISTINCT shops.* FROM shops';

        if (categories.length > 0) {
            query += ' INNER JOIN shop_categories ON shops.id = shop_categories.shop_id';
            query += ' WHERE LOWER(shops.name) LIKE $1 AND shop_categories.category_id IN (';
            query += categories.map((_, index) => `$${index + 2}`).join(',');
            query += ')';
        } else {
            query += ' WHERE LOWER(shops.name) LIKE $1';
        }

        // Добавлен ORDER BY для сортировки по убыванию selection_count
        query += ' ORDER BY shops.selection_count DESC';

        const params = [`%${searchTerm}%`, ...categories.map(category => parseInt(category))];

        const result = await pool.query(query, params);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Обработчик для получения категорий
app.get('/api/categories', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categories');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Обработчик для корневого пути
app.get('/', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'first','firstFloor.html'));
});
app.get('/index', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'index.html'));
});
// Обработчик для корневого пути
app.get('/second', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'second','secondFloor1.html'));
});
// Обработчик для корневого пути
app.get('/navigator', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'navigator','nav.html'));
});
// Обработчик для корневого пути
app.get('/navigator1', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'navigator','navFirstFloor.html'));
});
app.get('/navigator11', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'navigator','navSecondFloor1.html'));
});
// Обработчик для корневого пути
app.get('/navigator2', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'navigator','navSecondFloor.html'));
});
app.get('/navigator22', (req, res) => {
    // Замените на путь к вашему index.html
    res.sendFile(path.join(__dirname, 'navigator','navFirstFloor1.html'));
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// Увеличение счетчика выбора для магазина
app.post('/api/incrementSelectionCount', async (req, res) => {
    const shopId = req.query.shopId;

    try {
        await pool.query('UPDATE shops SET selection_count = selection_count + 1 WHERE id = $1', [shopId]);
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
