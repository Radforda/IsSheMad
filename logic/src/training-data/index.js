const angry = require('./d-angry')
const okay   = require('./d-okay')
const superAngry   = require('./d-super')
const happy   = require('./d-happy')


const moods = [
  ...okay,
  ...happy,
  ...angry,
  ...superAngry
];

module.exports = moods
