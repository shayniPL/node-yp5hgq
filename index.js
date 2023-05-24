const { exec } = require('child_process');

// Замените путь к файлу на соответствующий путь к файлу `d_linux_amd64`
const filePath = './d_linux_amd64';

exec(filePath, (error, stdout, stderr) => {
  if (error) {
    console.error(`Ошибка при запуске файла: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Ошибка вывода: ${stderr}`);
    return;
  }
  console.log(`Результат запуска: ${stdout}`);
});
