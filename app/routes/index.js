const userRoute = require("./users.routes.js");

function route(app){
    app.use("/users", userRoute);
}

module.exports = route