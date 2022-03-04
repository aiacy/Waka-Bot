const Database = require("@replit/database")

const db = new Database()

db.set("hello", "yes");
db.get("hello", { raw: false }).then(console.log);
