const path = require('path')
const client = require('scp2')
const chalk = require('chalk')
const argv = process.argv

const ipList = argv.slice(2)

const servers = {
  77: '账号:密码@IP地址: /target/dist/',
  88: '账号:密码@IP地址: /target/dist/'
}

function upload(ip) {
  if (servers[ip]) {
    console.info(chalk.yellow(servers[ip]))
    client.scp(path.resolve('./dist/'), servers[ip], (err) => {
      if (err) {
        console.error(chalk.red(err.message))
      } else {
        console.info(chalk.green(ip + ' Upload Success.'))
      }
    })
  } else {
    console.log(chalk.red(`Not matched server ${ip}.`))
  }
}

if (ipList.length) {
  ipList.forEach(function (item) {
    upload(item)
  })
} else {
  console.log(chalk.red('No ip scpecify.'))
}
