const crypto = require("crypto");

let hashData = data => {
    const hash = crypto.createHash("sha256");
    hash.update(data);
    return hash.digest("hex");
};

let getUserNameFromHeader = headers => {
    const base64Credentials = headers.authorization.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString(
        "ascii"
    );
    const [username] = credentials.split(":");
    return username;
};

module.exports.hashData = hashData;
module.exports.getUserNameFromHeader = getUserNameFromHeader;
