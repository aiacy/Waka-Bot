const Database = require("@replit/database")

const db = new Database()

db.set("hello", "yes");
db.getAll().then(console.log);
