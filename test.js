const pack = require('./index.js')

pack.github('telegram').then(res => console.log(res))

pack.npm('telegram').then(res => console.log(res))

pack.pypi('telegram').then(res => console.log(res))
