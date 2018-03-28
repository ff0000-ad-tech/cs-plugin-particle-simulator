const argv = require('minimist')(process.argv.slice(2))
const path = require('path')
const fs = require('fs')
const debug = require('debug')
const log = debug('ad-es6-particles')


const { action, size, folders } = argv

if (!size) {
  log('No size is specified')
  return
}

// TODO: use actual path
const relativeAdPath = `../1-build/${size}/`
const adPath = path.resolve('./1-build', size)
const emitterDataPath = path.join(adPath, 'js')
const imagePath = path.join(adPath, 'images')

const getInfo = () => {
  // find emitter data
  const emitterDataFiles = []
  const emitterDataPattern = /EmitterData([a-zA-Z0-9_.-]*)\.js/
  const dataFiles = fs.readdirSync(emitterDataPath)

  dataFiles.forEach(name => {
    if (emitterDataPattern.test(name)) {
      const content = fs.readFileSync(path.join(emitterDataPath, name), 'utf8')
      emitterDataFiles.push({
        name: name,
        content: content
      })
    }
  })

  // find all images
  const imagePaths = []
  const imageFiles = fs.readdirSync(imagePath)

  imageFiles.forEach(name => {
    imagePaths.push(`${relativeAdPath}images/${name}`)
  })
  
  const result = {
    emitterDataFiles: emitterDataFiles,
    imagePaths: imagePaths
  }

  console.log(JSON.stringify(result))
}

const writeData = () => {
  const { fileName, data } = argv
  // console.log(argv)
  const filePath = path.resolve(emitterDataPath, fileName)

  if (fs.existsSync(filePath)) {
    let content = decodeURIComponent(data)
    content = JSON.parse(content, null, 2)
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`(/◕ヮ◕)/ Weee~ data is saved at ${filePath}`)
    
  } else {
    console.log(`(@_@) Oops, the file might have been removed: ${filePath}`)
    console.log('You can still manually copy and paste the data into a new file!')
  }
}

switch(action) {
  case 'getInfo':
    getInfo()
  break
  case 'writeData':
    writeData()
  break
  default:
    // do nothing
}





