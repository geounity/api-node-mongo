const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
  controller
    .getDebates()
    .then(data => {
      response.success(req, res, data, 200)
    })
    .catch(e => {
      response.error(req, res, 'Internal error', 500, e)
    })
})

router.post('/', (req, res) => {
  const { idUser, debate } = req.body
  controller
    .saveDebate(idUser, debate)
    .then(data => {
      response.success(req, res, data, 201)
    })
    .catch(e => {
      response.error(req, res, 'Internal error', 500, e)
    })
})

module.exports = router