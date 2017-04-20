import MainController from './controllers/MainController'

module.exports = (router) => {
  router.get('/api/v1/shows/:title', MainController.findShow)
}
