import {selectAll} from "../repo/queries.js"

export default (app) => {
    app.get('/', async (req, res) => {
        const courts = await selectAll()
        res.render('index', {title: 'Tennis courts', courts: courts})
    })
}