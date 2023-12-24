import express from 'express';
import 'dotenv/config';
import { connectDB } from './database/connect.js';
import cors from 'cors'



// routes import
import termsRouter from './routes/termsRouter.js';
import articalsRouter from './routes/articalRouter.js';
const server = express()

// database connection 
connectDB()


// Using Middlewares
server.use(express.json({ limit: '20mb' }));
server.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);


// routes
server.use('/api', termsRouter)
server.use('/api', articalsRouter)

server.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`)
})