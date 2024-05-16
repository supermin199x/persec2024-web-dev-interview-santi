ข้อที่ 5

SELECT c.product_name, SUM(b.quantity) as total_quantity
FROM orders a
LEFT JOIN order_details b 
ON a.order_id = b.order_id
LEFT JOIN products c 
ON b.product_id = c.product_id
WHERE YEAR(a.order_date) = 2016
GROUP BY c.product_name
ORDER BY total_quantity DESC
LIMIT 5;


ข้อที่ 6

SELECT t1.product_name
FROM (
    SELECT c.product_name, SUM(b.quantity) as total_sum
    FROM orders a
    LEFT JOIN order_details b ON a.order_id = b.order_id
    LEFT JOIN products c ON b.product_id = c.product_id
    WHERE YEAR(a.order_date) = 2016
    GROUP BY c.product_name
    ORDER BY total_sum DESC
    LIMIT 5
) AS t1
JOIN (
    SELECT c.product_name, SUM(b.quantity) as total_sum
    FROM orders a
    LEFT JOIN order_details b ON a.order_id = b.order_id
    LEFT JOIN products c ON b.product_id = c.product_id
    WHERE YEAR(a.order_date) = 2017
    GROUP BY c.product_name
    ORDER BY total_sum DESC
    LIMIT 5
) AS t2 ON t1.product_name = t2.product_name;


ข้อที่ 7

select year(order_date),(sum(quantity-b.discount)*unit_price) as sum_total
from orders a 
left join order_details b 
on a.order_id = b.order_id
left join products c 
on b.product_id = c.product_id
where ship_region = 'Western Europe'
group by year(order_date)