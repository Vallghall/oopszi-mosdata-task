import express from "express"
import routes from "./routes/routes.js"

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(express.static('./public'))

routes(app)

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send("NOT FOUND")
})

app.listen(port,() => {
    console.log('Server started on port: ' + process.env.PORT)
})
