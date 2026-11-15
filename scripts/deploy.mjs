// Builds the site and publishes dist/ to the `deploy` branch.
// Hostinger (PHP/HTML site, Advanced > GIT) deploys that branch to public_html automatically.
// Usage: npm run deploy
import { execSync } from 'node:child_process'
import { cpSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' })
const out = (cmd) => execSync(cmd).toString().trim()

const remote = out('git remote get-url origin')
const sha = out('git rev-parse --short HEAD')

run('npm run build')
const dir = mkdtempSync(join(tmpdir(), 'deploy-'))
try {
  cpSync('dist', dir, { recursive: true })
  run('git init -q -b deploy', dir)
  run('git add -A', dir)
  run(`git commit -q -m "build: production files from main ${sha}"`, dir)
  run(`git push -q -f ${remote} deploy`, dir)
  console.log(`\nPublished ${sha} to the deploy branch. Hostinger will update the live site shortly.`)
} finally {
  rmSync(dir, { recursive: true, force: true })
}
