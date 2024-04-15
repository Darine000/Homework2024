exports.getGalleryItems = (req, res) => {

    const galleryItems = []; 
    res.json(galleryItems);
};

exports.getGalleryItemById = (req, res) => {
    const itemId = req.params.id;
    const item = null; 
    if (!item) {
        res.status(404).send('Prvek galerie nebyl nalezen');
    } else {
        res.json(item);
    }
};

exports.createGalleryItem = (req, res) => {
    const itemData = req.body;
    const newItem = null; 
    res.status(201).json(newItem);
};

exports.updateGalleryItem = (req, res) => {
    const itemId = req.params.id;
    const updatedItemData = req.body;
    res.send('Prvek galerie byl úspěšně aktualizován');
};

exports.deleteGalleryItem = (req, res) => {
    const itemId = req.params.id;
    res.send('Položka galerie byla úspěšně odstraněna');
};
