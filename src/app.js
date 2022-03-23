import express from "express"
import favicon from "serve-favicon"
import dotenv from "dotenv"

import routes from "./routes/routes.js"
import pgService from "./repo/index.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 80

app.set('view engine', 'pug')

app.use(express.static('./public'))
app.use(favicon('./public/img/favicon.ico'))

routes(app)
pgService.createDB()

app.use((req, res) => {
    res.render('404.pug', {title: "Error Page", message: "Error Bad Request"})
})

app.listen(port, () => {
    console.log(`Server started at port :${port}`)
})
