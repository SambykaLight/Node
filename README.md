# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/wONheb2JRoZNi8s6E7WhyYKOpqeEpz

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
https://monosnap.com/file/zVZ9DG0ikXTEwXsPF0psm93ArxkKSu

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/NIPE6xJB4f44s579XIbmLQcKd84oO4

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
https://monosnap.com/file/pEjP89TRvLSLomHcSEvSCQtF4tLNZ1