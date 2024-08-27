
let http = require("http")
let express = require("express")    
let app = express()
app.use(express.json());

app.get("/home", (req, res) => {
    console.log(req);
    res.status(200).json({
        massage: "this is home page"
    })
});

app.get("/index", (req, res) => {
    console.log(req);

    res.status(201).json({
        massage: "this is index page",
    });
})

app.get("/about", (req, res) => {
    console.log(req);

    res.status(200).json({
        massage: "this is about page",
    })

})

app.get("/product", (req, res) => {
    res.status(200).json({
        massage: "this is product page",
    })
});

app.get("/contact", (req, res) => {
    res.status(200).json({
        massage: "this is contact page",
    })
})


http.createServer(app).listen(3001, () => {
    console.log(`server started ${3001}`);
})




