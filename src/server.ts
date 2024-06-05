import mongoose from "mongoose"
import app from "./app"
import config from "./app/config";
// import 'dotenv/config'
// const port = 3000 



async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(config.port, () => {
            console.log(`my moongose server working  ${config.port}`)
        })

    } catch (error) {
        console.log(error)

    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    // menda menda
}

main()


