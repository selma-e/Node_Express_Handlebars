const router = require("./controllers/burgers_controller");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'));
app.use(router);

app.engine("handlebars", exphbs({
    defaultLayout: "main" //coming from main.handlebar
}));

app.set("view engine", "handlebars");

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});