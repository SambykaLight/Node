# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/wONheb2JRoZNi8s6E7WhyYKOpqeEpz
https://user-images.githubusercontent.com/113416916/250361149-aaf78073-ecbd-4e64-a9e1-8f836e936429.png

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/zVZ9DG0ikXTEwXsPF0psm93ArxkKSu
https://user-images.githubusercontent.com/113416916/250361161-dc188aa2-15fd-429a-a8a6-a169a9902069.png

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/NIPE6xJB4f44s579XIbmLQcKd84oO4
https://user-images.githubusercontent.com/113416916/250361168-48e65200-dde3-4631-b2dc-a5b82ac1752d.png

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/pEjP89TRvLSLomHcSEvSCQtF4tLNZ1
https://user-images.githubusercontent.com/113416916/250361172-1e9b37ae-c26d-46d6-bcdb-75c26a1758b7.png