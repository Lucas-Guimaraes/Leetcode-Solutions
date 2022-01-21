    SELECT today.id
      FROM weather today
INNER JOIN weather yesterday
        ON DATE_ADD(yesterday.recordDate, INTERVAL 1 DAY)=today.recordDate
       AND today.temperature > yesterday.temperature;