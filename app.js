import express from "express";  //import express server package
import morgan from "morgan";  //import morgan package
import cors from 'cors'; // import cors package 

//load router modules from their path
// import questionRouter from "./routes/questionRouter.js" 
// import playerRouter from "./routes/playerRouter.js"
// import answerRouter from "./routes/answerRouter.js"

import planetRouter from "./routes/planetRouter.js"


const app = express();
const PORT = process.env.PORT || 3500;



//middleware
app.use(morgan("dev")); //use morgan to show request logs in real time. 
app.use(express.json()); 
app.use(cors()); //enable all Cross-Origin Resource Sharing (CORS) request 

app.use("/", planetRouter);

//middleware to send requests to router modules. 
// app.use("/api/questions", questionRouter);
console.log ('flarp')

//attaching server to a PORT specified above.
app.listen(PORT, function () {
    console.log(`Get Served - on Port ${PORT}`);
  });
