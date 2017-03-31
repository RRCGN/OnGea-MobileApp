const express = require('express')
const chalk = require('chalk')

const PORT = 3000

const authDB = require('./auth_db')
const dataDB = require('./data_db')
let notiDB = []

const app = express()


app.get('/auth', (req, res) => {
  const user = authDB.users
    .find(user => (
      user.username === req.query.username &&
      user.password === req.query.password
    ))

  if (!user) return res.sendStatus(401)
  const token = authDB.tokens.find(token => token.userId === user.id)
  return res.json(token)
})


app.get('/data', (req, res) => {
  res.json(dataDB)
})


app.get('/notifications', (req, res) => {
  console.log('Notifications are polling')
  res.json({ notifications: notiDB })
  notiDB = []
})

app.post('/notifications', (req, res) => {
  notiDB.push({ message: req.query.message })
  res.status(201).json({ success: true })
})


app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`
  console.log()
  console.log(chalk.cyan('  \\(•◡•)/ Hej!'))
  console.log()
  console.log(chalk.grey(`  Info: enter 'rs' to manually restart the server`))
})
