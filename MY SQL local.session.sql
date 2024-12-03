CREATE TABLE products (
    item_id INTEGER PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price money,
    quantaty_avalable INTEGER
      
);

CREATE TABLE users (
 user_id INTEGER NOT NULL,
 user_name VARCHAR(100) Not NULL,
 user_address varchar(100),
 Primary key (user_id)
);

CREATE TABLE orders(
order_number INTEGER NOT NULL,
PRIMARY KEY (order_number),
customer_id INTEGER,
FOREIGN KEY (customer_id) REFERENCES users(user_id),
products_ordered INTEGER NOT NULL,
customer_address varchar DEFAULT NULL
);

SELECT * FROM products;
SELECT * FROM users;
SELECT * FROM orders;

INSERT INTO products
VALUES (1, 'Computer', 500, 20);

INSERT INTO users
VALUES (1, 'Test User', '123 Test Avanue');