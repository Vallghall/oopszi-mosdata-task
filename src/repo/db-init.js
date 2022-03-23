import fs from "fs"
import pg from "pg"
import dotenv from "dotenv"
import _ from 'lodash'
dotenv.config()

import request from "../request/request.js";
import { initScript, insertScript, selectAllScript } from './sql-scripts.js'


const { Client} = pg
const configs = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
}


export default () => {
    const client = new Client(configs)

    client.connect().then(async () => {
        try {
            console.log("Создание схемы базы данных...")
            await client.query(initScript)
            console.log("... прошло успешно!")

            const rows = await selectAll(client)
            if (rows.length === 0)
                insertAPIData(client)
        } catch (err) {
            console.error(`DB initialization failed :(\n${err}`)
        }
    })

    function insertAPIData(client) {
        request()
            .then(body => {
                const parsedBody = JSON.parse(body)
                return Array.of(Object.values(parsedBody))
            })
            .catch( err => {
                console.error("Request failed: " + err)
                let respData = []
                fs.readFile("./data.json", "utf-8", (err,data) => {
                    const parsedData = JSON.parse(data)
                    respData = Array.from(Object.values(parsedData))
                    insertValues(respData, client)
                })
                return respData
            })
            .catch(err => console.error(`error while inserting values: ${err}`))
    }


}

async function selectAll(client) {
    const { rows } = await client.query(selectAllScript)
    return rows
}

async function insertValues(data, client) {
    data.forEach(async datum => {
        await client.query(insertScript, [
            datum.Address,
            datum.AdmArea,
            datum.DisabilityFriendly,
            datum.District,
            datum.Email,
            datum.HasCashMachine,
            datum.HasDressingRoom,
            datum.HasEatery,
            datum.HasEquipmentRental,
            datum.HasFirstAidPost,
            datum.HasMusic,
            datum.HasTechService,
            datum.HasToilet,
            datum.HasWifi,
            datum.HelpPhone,
            datum.HelpPhoneExtension,
            datum.Lighting,
            datum.ObjectName,
            datum.Paid,
            datum.GeoData
        ])
    })
}
