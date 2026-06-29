const fs = require("fs");

function logEvent(entry) {

    let logs = [];

    try {
        logs = JSON.parse(fs.readFileSync("./db/logs.json", "utf-8"));
    } catch (e) {
        logs = [];
    }

    logs.push(entry);

    fs.writeFileSync("./db/logs.json", JSON.stringify(logs, null, 2));
}

module.exports = { logEvent };
