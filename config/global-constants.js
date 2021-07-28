import { execSync } from 'child_process'
import dayjs from 'dayjs'
import pkg from '../package.json'

// git version
const GIT_VERSION = {
  BRANCH: execSync('git rev-parse --abbrev-ref HEAD').toString().trim(),
  COMMIT: execSync('git rev-parse HEAD').toString().trim()
}

// app info
const VITE_APP_INFO = {
  NAME: '2v-start-kit',
  VERSION: `${pkg.version}`,
  BUILD_TIME: `${dayjs().format('YYYY-M-D HH:mm:ss')}`,
  BUILD_TOOL: 'node v15.12.0'
}

export { GIT_VERSION, VITE_APP_INFO }
