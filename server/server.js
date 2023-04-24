// const bodyParser = require("body-parser");
// const cors = require("cors");
// const express = require("express");
// const path = require('path');

// const app = express();
// const port = process.env.PORT || 3000;

// let corsOptions = {
//   origin: "http://localhost:3000",
// };

// app.use(cors(corsOptions));

// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/api/getList", (req, res) => {
//     let list = ["item1", "item2", "item3"];
//     res.json(list);
//     console.log('Sent list of items');
// });

// app.get("*", (req, res) =>{
//     res.sendFile(path.join(`${__dirname}/client/build/index.html`));
// });

// app.listen(port);

// console.log(`Listening on port: ${port}`);

