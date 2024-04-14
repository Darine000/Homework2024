exports.search = (req, res) => {
    const query = req.query.q;
    const data = [
        { id: 1, title: 'Результат 1' },
        { id: 2, title: 'Результат 2' },
        { id: 3, title: 'Результат 3' }
    ];

    const results = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(results);
};
