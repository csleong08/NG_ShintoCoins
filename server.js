const xp = require("express");
// const routes = require("./server/routes.js");
// const app = routes(xp());
const app = xp();
const bp = require("body-parser");

app.use(xp.static( __dirname + '/public/dist/public' ));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

// routes(app);
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, (errs)=>console.log(errs?errs:"gucci"));