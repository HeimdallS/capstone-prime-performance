const express = require('express');
const app = express();
const cors = require("cors");
const customizeRouter = require('./routers/customizeRouter');
// const savedRouter=require('./routers/savedRouter');
const PORT = 8000;

app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     console.log("Next request test");
//     next();
// })

app.use('/customize', customizeRouter);
// app.use('/saved', savedRouter);

app.listen(PORT, () => {
    console.log("Server is good to go")
})