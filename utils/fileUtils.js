const fs = require('fs');

const loadFromFile = (filePath) => {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data || '[]');
};

const saveToFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { loadFromFile, saveToFile };
