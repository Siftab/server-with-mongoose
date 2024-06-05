import mongoose from "mongoose"
import app from "./app"
// import 'dotenv/config'
const port = 3000



async function main() {
    await mongoose.connect(`${process.env.DATABASE_URL}`);

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.listen(process.env.PORT, () => {
    console.log(`my moongose server working  ${process.env.PORT}`)
})