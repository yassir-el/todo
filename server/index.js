import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

app.get("/todo/", async (req, res) => {
    try {
        const todos = await prisma.todo.findMany({

        })
        res.json({ todos }).status(201);
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Error" });
    }
})

app.post("/todo/create", async (req, res) => {
    try {
        const content = req.body.content;
        const date = req.body.date;
        if (new Date(date) - new Date().setHours(0,0,0,0) < 0)
        {
            res.status(400).json({message: "Invalid date"});
        }
        // return ;
        if (!content) {
            res.status(400).json({ message: "Argument `content` is missing." })
            return
        }
        await prisma.todo.create({
            data: req.body
        })
        res.status(201).json({ content });
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: "Error" });
    }
})

// delete task delete 
// edit task put 

app.get("/test", (req, res) => {

    res.json({ message: "Hello World" }).status(200);

})

app.listen(8080);