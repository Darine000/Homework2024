exports.search = (req, res) => {
    const query = req.query.q;
    const data = [
        { id: 1, title: 'Výsledek 1' },
        { id: 2, title: 'Výsledek 2' },
        { id: 3, title: 'Výsledek 3' }
    ];

    const results = data.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    
    res.json(results);
};
