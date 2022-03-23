import https from "https"


export default async () => {
    const url = process.env.API_URL
    const apiKey = process.env.API_KEY

    let respData = ""

    https.get(url + `?api_key=${apiKey}&$top=100`, (res) => {
        if (res.statusCode !== 200)
            throw new Error(`status not OK: ${res.statusCode}`)

        if (res.headers["content-type"] !== "application/json; charset=utf-8")
            throw new Error("Response has invalid Content-Type")

        res.on("data", data => respData += data)
        res.on("end", () => console.log("Response body ended"))

    }).on("error", err => {
        console.error(err)
    })
    return respData
}
