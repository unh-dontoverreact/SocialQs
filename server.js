require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const dbConnection = require("./database");
const passport = require("./passport");
const routes = require("./routes");
var multer = require("multer")
var fs = require("fs");
const user = require("./routes/auth");

// Application Configurable Constants
const PORT = process.env.PORT || 3001;
const SESSION_KEY = process.env.COOKIE_SESSION_KEY || COOKIE_SESSION_KEY;

// Web Server Initializer
const app = express();

// Sessions
app.use(
    session({
        secret: SESSION_KEY, //random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false, //required
    })
);

// Define middleware here
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// multer middleware
// app.use(multer({ dest: "./uploads/",
//     rename: function (fieldname, filename) {
//     return filename;
//     },
//     }))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Authentication Elements
app.use(passport.initialize());
app.use(passport.session());

// Define Express API routes here
app.use("/auth", user);
app.use(routes);

// React Routes - Send every other request to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}`);
});
