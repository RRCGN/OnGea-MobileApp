const jsonServer = require('json-server')
const chalk = require('chalk')
const server = jsonServer.create()
const router = jsonServer.router(`${__dirname}/db.json`)
const middlewares = jsonServer.defaults()

const PORT = 3000
const db = require('./db.json')
const noAuth = process.argv[2] === '--no-auth'

server.use(middlewares)

server.get('/auth', (req, res) => {
  const user = db.users
    .find(user => (
      user.username === req.query.username &&
      user.password === req.query.password
    ))
  if (!user) return res.sendStatus(401)
  const token = db.tokens.find(token => token.userId === user.id)
  return res.json(token)
})

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (noAuth) {
    req.query.userId = "1"
    req.params.userId = "1"
    return next()
  }

  const user = db.tokens.find(token => token.token === req.query.token)
  if (!user) return res.sendStatus(401)

  req.query.userId = user.id + ""
  req.params.userId = user.id + ""
  next()
})
server.use(router)

server.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`
  console.log()
  console.log(chalk.cyan('  \\(•◡•)/ Hej!'))
  console.log()
  console.log(chalk.grey(`  Mode: ${noAuth ? 'No Auth required' : 'Auth required!'}`))
  if (noAuth) {
    console.log(chalk.grey(`        Using 'userId=1' for every request`))
  } else {
    console.log(chalk.grey(`        You need to obtain a token from /auth?userId=1`))
    console.log(chalk.grey(`        and add this token to your request with ?token=xxx`))
  }
  console.log(chalk.grey(`  Info: enter 'rs' to manually restart the server`))
  console.log()
  console.log(chalk.bold('  Resources:'))
  for (let resource in db) {
    console.log(`  ${url}${resource}`)
  }
  console.log()
  console.log(chalk.bold('  Home:'))
  console.log(`  ${url}`)
  console.log()
})
