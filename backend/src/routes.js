const express = require('express')
const routes = express.Router()

const users = [{
    id: 1,
    name: 'Lucas',
    email: 'teste@email.com',
    password: '123456'
}]

routes.post('/login', (req, res) => {
    const { email, password } = req.body

    const user = users.find(user => user.email === email && user.password === password)
    if (user) {
        return res.status(200).json(user)
    }

    return res.status(401).json({ message: 'credenciais invalidas' })
})

module.exports = routes