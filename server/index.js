const express = require('express');
const app = express();
const cors = require("cors");
const customizeRouter = require('./routers/customizeRouter');
const tempSavedRouter=require('./routers/tempSavedRouter');
const shuffleRouter = require('./routers/shuffleRouter');
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.send(`<h1>Express Test</h1>`)
})

app.use((req, res, next) => {
    console.log("Next request test");
    next();
})

app.use('/customize', customizeRouter);
app.use('/tempsave', tempSavedRouter);
app.use('/shuffle', shuffleRouter);

app.listen(PORT, () => {
    console.log("Server is good to go")
})