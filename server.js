const express = require('express');
const mysql = require('mysql');
const app = express();

// Создаем подключение к базе данных MySQL
const connection = mysql.createConnection({
  host: '192.168.76.55',    // Укажите адрес вашего MySQL-сервера
  user: 'rootPC',  // Укажите имя пользователя для доступа к базе данных
  password: 'root',   // Укажите пароль
  database: 'app'  // Укажите название базы данных
});

// Устанавливаем соединение с базой данных
connection.connect(err => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
    return;
  }
  console.log('Подключение к базе данных успешно установлено');
});

// Маршрут для выполнения SQL-запроса и отправки данных в формате JSON
app.get('/menu', (req, res) => {
  const sql = 'SELECT * FROM `5`';

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Ошибка выполнения SQL-запроса:', error);
      res.status(500).json({ error: 'Ошибка на сервере' });
    } else {
      res.json(results);
    }
  });
}
);
app.get('/news', (req,res)=>{
const sql = 'SELECT * FROM `news`';
connection.query(sql,(error,results) => {
  if (error) {
    console.error('Ошибка выполнения SQL-запроса:', error);
    res.status(500).json({ error: 'Ошибка на сервере' });
  } else {
    res.json(results);
  }
})
}
);
// Запуск сервера
const port = 5000; // Вы можете указать любой свободный порт
app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
