import express from 'express'

const port = +process.env.PORT || 4000
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        status: req.statusCode,
        msg: `You're Home`
    })
})

app.get('/about', (req, res) => {
    res.status(200).json({
        status: req.statusCode,
        msg: `About page`
    })
})

app.get('*', (req, res) => {
    res.status(200).json({
        status: 404,
        msg: `404 page`
    })
})

app.listen(port, () => {
    console.log(`server is on : http://localhost:${port}`)
})