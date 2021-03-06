const Database = require('better-sqlite3');

const db = new Database(`${__dirname}/app.db`);

// making table and adding products in database
if (!table_exists('products')) {
    db.prepare('CREATE TABLE products (productId int PRIMARY KEY NOT NULL, productCode varchar(255) NOT NULL, productName varchar(255) NOT NULL, productTitle varchar(255) NOT NULL, productSubTitle varchar(255) NOT NULL, productDescription varchar(255) NOT NULL, productPlatform varchar(255) NOT NULL, productSmallImage varchar(255) NOT NULL, productPrice int NOT NULL);').run();

    db.prepare("INSERT INTO products VALUES (1, '101', 'Games', 'Grand Theft Auto Vice City', 'Grand Theft Auto Vice City', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Rockstar Games', '../assets/game1.jpg', 32), (2, '102', 'Games', 'Mortal Kombat 11', 'Mortal Kombat 11', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/game2.jpeg', 20), (3, '103', 'Games', 'FIFA 22', 'FIFA 22', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Origin', '../assets/game3.jpg', 26), (4, '104', 'Games', 'Grand Theft Auto 5', 'Grand Theft Auto 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Rockstar Games', '../assets/game4.jpg', 25), (5, '105', 'Games', 'NBA 2K22', 'NBA 2K22', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/game5.jpg', 60), (6, '106', 'Games', 'Witcher 3', 'Witcher 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/small1.jpg', 30), (7, '107', 'Games', 'God of War', 'God of War', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Steam', '../assets/small2.jpg', 30), (8, '108', 'Games', 'Red Dead Redemption 2', 'Red Dead Redemption 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent diam mi, scelerisque pulvinar finibus ut, malesuada at sapien. Proin lobortis magna ut orci rhoncus, non consectetur enim sollicitudin. Nam quis.', 'Rockstar Games', '../assets/small3.jpg', 30)").run();
}

// function to check if the table already exists or not
function table_exists(name) {
    const rows = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name=?;").get(name);
    return !!rows;
}

module.exports = db;