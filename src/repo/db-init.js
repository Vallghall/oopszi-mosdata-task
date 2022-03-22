import dotenv from "dotenv"
import { Client } from "pg"

dotenv.config()
const dbURL = process.env
const client = new Client