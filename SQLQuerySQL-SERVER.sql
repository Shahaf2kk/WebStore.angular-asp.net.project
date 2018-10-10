DROP TABLE IF EXISTS product;


CREATE TABLE product(
	product_id INT IDENTITY(1, 1)
	product_category VARCHAR(100),
	product_sub_category VARCHAR(100),
	product_name VARCHAR(250) NOT NULL,
	product_description TEXT,
	product_price DECIMAL NOT NULL,
	product_image_path VARCHAR(MAX),
	CONSTRAINT PK_product PRIMARY KEY (product_id),
);

