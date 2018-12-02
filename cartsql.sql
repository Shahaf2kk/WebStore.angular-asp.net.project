------ Add to cart and cart Details ------
		-- by :
			-- 1 - userName
			-- 2 - product_id
			-- 3 - qty

		--IF EXISTS( SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf' )
		--	IF EXISTS(
		--			SELECT cartDetails.product_id FROM cartDetails 
		--			WHERE cart_id = (SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf') 
		--				  AND cartDetails.product_id = 147852779
		--				  AND cartDetails.payment_date IS NULL 
		--				  )
		--		BEGIN
		--			UPDATE cartDetails SET qty = ( -- OLD QTY
		--											SELECT cartDetails.qty FROM cartDetails 
		--											WHERE cartDetails.cart_id = (SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf')
		--												   AND cartDetails.product_id = 147852779
		--												   AND cartDetails.payment_date IS NULL
		--										  )
		--										 + 2 --NEW QTY
		--			WHERE cart_id = (SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf')
		--					AND cartDetailS.product_id = 147852779
		--					AND cartDetails.payment_date IS NULL
		--		END
		--	ELSE
		--		BEGIN
		--			INSERT cartDetails VALUES(
		--				(SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf'), -- CART ID
		--				147852779,												   -- PRODUCT ID
		--				2,                                                         -- QTY
		--				NULL                                                       -- PAYMENT_DATE
		--			)
		--		END
		--ELSE
		--	BEGIN
		--		INSERT INTO cart VALUES('Ashahaf')
		--		INSERT INTO cartDetails VALUES(
		--				(SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf'), -- CART ID
		--				147852779,												   -- PRODUCT ID
		--				2,                                                         -- QTY
		--				NULL													   -- PAYMENT_DATE
		--				)
		--	END
	
------ END Add to cart and cart Details ------

------ Add orderDetails -----
-- -YYYY-MM-DD hh:mm:ss[.nnnnnnn] [+|-]hh:mm

--INSERT orderDetails 
--	VALUES (
--				(SELECT orders.order_id FROM orders
--					 WHERE 
--						orders.userName = 'shahaf'
--						AND orders.payment_date IS NULL ),
--				(147852779),
--				(2),
--				(
--					(SELECT product.product_price FROM product WHERE product.product_id = 147852779)
--					* 2
--				)
--			)

------ END add orderDetails -----

------ Add shipDetails ------


		--INSERT shipDetails OUTPUT inserted.ship_id
		--	VALUES (
		--		'LOIUGFGHJKOLKJHB',
		--		'ASDFGDSA',
		--		'ASDASD',
		--		'132456754321'
		--			)

------ END Add shipDetails ------

------ ADD orders ------
		--INSERT orders 
		--	VALUES (
		--		2,
		--		'ashahaf',
		--		0,
		--		NULL
		--			)
------ END ADD orders ------

------ UPDATE orders.total cost ------
	
	IF EXISTS (
			SELECT orders.userName FROM orders
				WHERE orders.payment_date IS NULL
				AND orders.userName = 'shahaf'
					)
		BEGIN
			UPDATE orders SET orders.total_cost = 
				( 
					SELECT SUM(orderDetails.total_price) FROM orderDetails
						WHERE orderDetails.order_id = (
							SELECT orders.order_id FROM orders 
								WHERE orders.payment_date IS NULL
								AND orders.userName = 'shahaf')
				 ) 
				WHERE orders.userName = 'shahaf'
				AND orders.payment_date IS NULL
		END
------ END UPDATE orders.total cost ------
	


--DELETE cart WHERE cart_id = 6
--DELETE cartDetails WHERE cart_id = 6

--SELECT * FROM cart
--SELECT * FROM cartDetails


----------------------------------------------------------------------------------------------------------------------------------------------------
---- add new cart_id
-----------------------------------
--IF NOT EXISTS( SELECT userName FROM cart WHERE userName = 'shahaf' AND payment_date IS NULL )
--INSERT cart VALUES('shahaf', NULL, NULL)
-----------------------------------
---- add to cartDetails if exists update qty ,else add one more.
-----------------------------------
--IF EXISTS(SELECT product_id FROM cartDetails WHERE 
--cart_id = (SELECT cart_id FROM cart WHERE userName = 'shahaf' and payment_date IS NULL)
-- AND product_id = 147852738)
--UPDATE cartDetails
--	SET 
--	qty = (SELECT qty FROM cartDetails WHERE product_id = 147852738
--	AND 
--	cart_id = (SELECT cart_id FROM cart WHERE userName = 'shahaf' and payment_date IS NULL)) + 1,
--	total_cost = (SELECT total_cost FROM cartDetails
--		 WHERE product_id = 147852738 
--			AND 
--			cart_id = (SELECT cart_id FROM cart
--			WHERE userName = 'shahaf' and payment_date IS NULL)) + 
-- ( (SELECT product_price FROM product WHERE product_id = 147852738) * 1 ) WHERE product_id = 147852738
-- ELSE
-- INSERT INTO cartDetails VALUES ((SELECT cart_id FROM cart WHERE
--  userName = 'shahaf' and payment_date IS NULL), 147852738, 1,
-- (SELECT product_price FROM product WHERE product_id = 147852738) * 1)
---------------------------------------
------ update cart - total_price of whole total price from cartDetails.
----------------
-- UPDATE cart SET total_price =
--	 (SELECT SUM(total_cost) FROM cartDetails 
--		WHERE cart_id = (SELECT cart_id FROM cart WHERE userName = 'shahaf' 
--			AND payment_date IS NULL)
--		)
----------------------------------


 ----
--INSERT INTO cartDetails(cart_id, product_id , qty, total_cost) VALUES 
--((SELECT cart_id FROM cart WHERE userName = 'shahaf' and payment_date IS NULL),
-- 147852700, 5, 654);

--SELECT cart_id FROM cart WHERE userName = 'shahaf' and payment_date IS NULL
--INSERT INTO cartDetails(cart_id, product_id , qty, total_cost)
--     VALUES(1, 147852715, 1, (SELECT product_price FROM product WHERE product_id =147852715))
--SELECT * FROM cart
--DELETE cartDetails WHERE cart_id = 1
--INSERT cart VALUES('shahaf', NULL, NULL)
--SELECT * FROM cart
--SELECT * FROM cartDetails
