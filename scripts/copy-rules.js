const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'docs', 'public', 'rules')

const dirs = ['link', 'text']

for (const dir of dirs) {
  const src = path.join(root, dir)
  const dest = path.join(publicDir, dir)
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true })
    console.log(`Copied ${dir}/ -> ${path.relative(root, dest)}`)
  }
}

console.log('Rules copied.')
