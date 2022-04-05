import express from "express"
import fs from "fs"
import favicon from "serve-favicon"
import dotenv from "dotenv"

import routes from "./routes/routes.js"
import request from "./request/request.js"
import {  addMosAPIData } from "./repo/queries.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 80

app.set('view engine', 'pug')

app.use(express.static('./public'))
app.use(favicon('./public/img/favicon.ico'))

routes(app)
await request()
    .then(body => JSON.parse(body))
    .then(data => addMosAPIData(data))
    .catch( _ => {
        fs.readFile("./data.json", "utf-8", async (err, data) => {
            const parsedData = JSON.parse(data)
            await addMosAPIData(parsedData)
        })
    })
    .catch(err => console.error(`error while inserting values: ${err}`))


app.use((req, res) => {
    res.render('404', {title: "Error Page", message: "Error Bad Request"})
})

app.listen(port, () => {
    console.log(`Server started at port :${port}`)
})
