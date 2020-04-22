require('isomorphic-fetch')
const path = require('path')

const fetchCharacters = actions =>
  fetch('https://www.breakingbadapi.com/api/characters').then(r => r.json()).then(characters => {
    const CharactersTemplate = path.resolve('./src/templates/Characters.js')
    actions.createPage({
      path: '/characters',
      component: CharactersTemplate,
      context: {
        characters
      }
    })
  })

const fetchDeaths = actions =>
  fetch('https://www.breakingbadapi.com/api/deaths').then(r => r.json()).then(deaths => {
    const DeathsTemplate = path.resolve('./src/templates/Deaths.js')
    actions.createPage({
      path: '/deaths',
      component: DeathsTemplate,
      context: {
        deaths
      }
    })
  })

exports.createPages = ({ actions }) => {
  return Promise.all([fetchCharacters(actions), fetchDeaths(actions)])
}
