SELECT (case
       when mod(id,2) != 0 and total != id then id+1
       when mod(id,2) != 0 and total = id then id
       else id - 1
       end) as id, student
FROM seat, (SELECT count(*) AS total FROM seat) AS total_number
ORDER BY id ASC;
