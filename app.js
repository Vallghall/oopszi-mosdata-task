import express from "express"

const app = express()
const port = process.env.PORT || 80

app.set('view engine', 'pug')
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'JS web-server', message: 'First Express Pug App'})
})

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send("NOT FOUND")
})

app.listen(port, 'localhost', () => {console.log("Starting Express application")})
