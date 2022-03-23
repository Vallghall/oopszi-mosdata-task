import pg from 'pg'
import fs from 'fs'

import request from '../../src/request/request.js'


const { Pool } = pg
const dbURL = process.env.DB_URL
const pool = new Pool(dbURL)
const [insertScript, selectAllScript] = [
    readScript("insert.sql"),
    readScript("select-all.sql"),
]

function readScript(SQLFileName) {
    let dst = ""
    fs.readFile('./src/scripts/'+SQLFileName, "utf-8", (err, data) => {
        if (err) {
            console.error(`Failed to read SQL scripts\n${err}`)
            return
        }
        dst = data
    })
    return dst
}
