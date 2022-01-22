SELECT `score`, DENSE_RANK() OVER (ORDER BY Score DESC) as `rank`
FROM scores;