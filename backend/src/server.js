const express = require("express")
const app = express()
const cors = require('cors');
const PORT = 3000
const routes = require('./routes')

app.use(express.json())
app.use(cors());
app.use(routes)

app.get('/', (req, res) => {
    res.send('oi')
})

app.listen(PORT, () => {
    console.log('rodando porta 3000')
})