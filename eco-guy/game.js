const express = require("express");
const app =  express();

app.use(express.static('static'));
app.use(express.static('assets'));

const port = 3100; 
app.listen(port, () => {
    console.log("\n\nGame service started..");
});
