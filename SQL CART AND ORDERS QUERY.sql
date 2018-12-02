--select * from cart
--select * from cartDetails
--delete orderDetails where order_id = 17
--delete orders where order_id = 17
--delete shipDetails where ship_id = 17
select * from orders
select * from orderDetails
select * from shipDetails
--INSERT INTO orderDetails(order_id, product_id, qty, total_price) OUTPUT inserted.total_price VALUES 
--(11,147852778,9,(SELECT product.product_price FROM product WHERE product.product_id = 147852778) * 9),
--(11,147852778,9,(SELECT product.product_price FROM product WHERE product.product_id = 147852778) * 9)
--UPDATE orders SET total_cost = (SELECT SUM(total_price) FROM orderDetails WHERE orderDetails.order_id = 3) OUTPUT inserted.total_cost WHERE orders.order_id = 3
--select * from orderDetails
--select * from orders
--INSERT INTO cartDetails values (8, 147852774, 1324)
--DELETE FROM cartDetails
-- WHERE cartDetails.cart_id = 8 
-- AND cartDetails	h.product_id IN (147852778, h)
 
 
--select * from cartDetails

--INSERT INTO shipDetails OUTPUT INSERTED.ship_id VALUES ('asdfgh','asdfhg','asdfhj','asdfhj')
--SELECT * FROM shipDetails



---------- Add to cart and cart Details ------
--IF EXISTS( SELECT cart.cart_id FROM cart WHERE userName = 'shahaf' )
       
--			IF EXISTS ( SELECT cartDetails.product_id FROM cartDetails WHERE cartDetails.product_id = 147852778 AND cartDetails.cart_id = 8 )
--				UPDATE cartDetails SET qty = ( SELECT cartDetails.qty FROM cartDetails
--				WHERE cartDetails.cart_id = 8 AND cartDetails.product_id = 147852778 ) + 2 
--			ELSE 
--			INSERT INTO cartDetails VALUES ( 8, 147852778, 2) 
		
--ELSE 
--	BEGIN
--		INSERT INTO cart VALUES ( 'shahaf' )
--		insert into cartDetails values ((SELECT cart.cart_id FROM cart WHERE userName = 'shahaf'), 147852778, 2)
--	END

--	GO
--insert into cartDetails values (8, 147852778, 2)
--delete cartDetails where cartDetails.cart_id = 8
--delete cart where cart.userName = 'shahaf'
--SELECT * FROM cartDetails
--select * from cart
--select * from users
--INSERT INTO cartDetails VALUES (8, 147852779, 2, NULL)
--IF EXISTS( SELECT cart.cart_id FROM cart WHERE userName = 'shahaf' ) BEGIN IF EXISTS ( SELECT cartDetails.product_id FROM cartDetails WHERE cartDetails.product_id = 147852779 ) UPDATE cartDetails SET qty = @oldQty + @qty ELSE INSERT INTO cartDetails VALUES ( @cart_id, @product_id, @qty) END ELSE INSERT INTO cart VALUES ( 'shahaf' ) 
		--IF EXISTS( SELECT cart.cart_id FROM cart WHERE userName = 'Ashahaf' )
		--	IF EXISTS(
		--			SELECT cartDetails.product_id FROM cartDetails 
		--			WHERE cart_id = @cartId)
		--		BEGIN
		--			UPDATE cartDetails SET qty = ( -- OLD QTY
		--											SELECT cartDetails.qty FROM cartDetails 
		--											WHERE cartDetails.cart_id = @cartId
		--										  )
		--										 + 2 
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
	
		--IF EXISTS (
		--		SELECT orders.userName FROM orders
		--			WHERE orders.payment_date IS NULL
		--			AND orders.userName = 'shahaf'
		--				)
		--	BEGIN
		--		UPDATE orders SET orders.total_cost = 
		--			( 
		--				SELECT SUM(orderDetails.total_price) FROM orderDetails
		--					WHERE orderDetails.order_id = (
		--						SELECT orders.order_id FROM orders 
		--							WHERE orders.payment_date IS NULL
		--							AND orders.userName = 'shahaf')
		--			 ) 
		--			WHERE orders.userName = 'shahaf'
		--			AND orders.payment_date IS NULL
		--	END

------ END UPDATE orders.total cost ------
	


--DELETE cart WHERE cart_id = 6
--DELETE cartDetails WHERE cart_id = 6

--SELECT * FROM cart
--SELECT * FROM cartDetails




----------------------------------- OLD -----------------------------------
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




	--SELECT cart.cart_id FROM cart JOIN cart ON cartDetails.cart_id = cart.cart_id
	--WHERE cartDetails.payment_date IS NULL AND cart.userName = 'shahaf'


--SELECT cart.cart_id FROM cart WHERE cart.userName = 'shahaf' AND payment_date IS NULL