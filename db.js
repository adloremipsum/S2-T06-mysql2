const mysql = require("mysql2/promise");

module.exports.query = async function (query) {
  const connection = await mysql.createConnection({
    host: "localhost", // "127.0.0.1",
    user: "root",
    password: "root",
    database: "hack_academy",
  });

  // Es solo para testear la conexión. NO ES OBLIGATORIO! 🎈
  connection.connect(function (err) {
    if (err) throw err;
    console.log("¡Hemos establecido conexión!");
  });

  const [users] = await connection.execute(query);
  connection.end();
  return users;
};
