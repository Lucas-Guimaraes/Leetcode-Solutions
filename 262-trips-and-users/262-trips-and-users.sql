WITH not_banned AS(
SELECT * FROM trips
WHERE client_id NOT IN (SELECT users_id FROM users WHERE banned = 'Yes')
AND driver_id NOT IN (SELECT users_id FROM users WHERE banned = 'Yes'))

SELECT request_at AS 'Day', ROUND(AVG(STATUS LIKE 'cancelled%'),2) AS 'Cancellation Rate' FROM not_banned 
WHERE request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY request_at;