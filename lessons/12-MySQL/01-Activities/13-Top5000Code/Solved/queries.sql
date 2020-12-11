USE top_songsDB;
-- A query which returns all data for songs sung by a specific artist
SELECT * FROM top5000 WHERE artist = 'Bing Crosby';
-- A query which returns all artists who appear within the top 5000 more than once
SELECT artist, COUNT(artist) AS count FROM top5000 GROUP BY artist HAVING COUNT(artist) > 20;
-- A query which returns all data contained within a specific range
SELECT * FROM top5000 WHERE position BETWEEN 10 AND 20;
-- A query which searches for a specific song in the top 5000 and returns the data for it
SELECT * FROM top5000 WHERE song = 'Believe';