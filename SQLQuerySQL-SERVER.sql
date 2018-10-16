DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
	userID INT IDENTITY(1, 1),
	userName VARCHAR(250) NOT NULL,
	userEmail VARCHAR(250) NOT NULL,
	userPass VARCHAR(250) NOT NULL,
	lastLogin datatimeeoffset(7)
);


CREATE TABLE product(
	product_id INT IDENTITY(1, 1),
	product_category VARCHAR(100),
	product_sub_category VARCHAR(100),
	product_name VARCHAR(250) NOT NULL,
	product_description TEXT,
	product_price DECIMAL NOT NULL,
	product_image_path VARCHAR(MAX),
	CONSTRAINT PK_product PRIMARY KEY (product_id),
);

