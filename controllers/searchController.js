// SearchController.js

exports.search = (req, res) => {
    const query = req.query.q;
    
    // Пример данных для поиска
    const data = [
        { id: 1, title: 'Результат 1' },
        { id: 2, title: 'Результат 2' },
        { id: 3, title: 'Результат 3' }
    ];

    // Выполняем поиск
    const results = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(results);
};
