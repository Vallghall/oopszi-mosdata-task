export default (app) => {
    app.get('/', (req, res) => {
        res.render('index', {title: 'Tennis courts', message: 'First Express Pug App'})
    })
}