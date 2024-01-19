import express from "express"
import { router } from "./routes"
import "./shared/translate/TranslationsYup"

const app = express()

app.use(express.json())
app.use(router)

export { app }