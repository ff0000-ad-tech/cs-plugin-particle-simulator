const argv = require('minimist')(process.argv.slice(2))
const path = require('path')

const debug = require('debug')
var log = debug('ad-es6-particles')

// command line arguments
log('COMMAND LINE ARGS:')
log(argv)
