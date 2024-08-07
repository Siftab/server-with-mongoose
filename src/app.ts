import express, { Application, Request, Response } from 'express'
import cors from "cors"
import { StudentRoutes } from './app/modules/student/student.route'
import { userRouter } from './app/modules/Users/user.route'
const app: Application = express()
// const port = 3000


// parsers
app.use(express.json())
app.use(cors())



// application routes 
app.use("/api/v1/student", StudentRoutes)
app.use("/api/v1/user", userRouter)

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello World!')

    res.send("serrver is super")





})

export default app