var express = require('express')
const router = express.Router()
const Client = require(`../models/Client`)


router.get(`/clients`, function (req, res) {
   Client.find({}).exec(function (err, response) {
      res.send(response)
   })
})

router.post(`/client`, async function (req, response) {
   console.log("sss")
   
   let client = new Client(req.body)
   await client.save()
   response.send(`saved to db`)
})

router.post(`/update/:par`, async function (req, response) {
   let newV= req.body
   let par = req.params.par
   Client.findOneAndUpdate({name: newV.client}, {[par]: newV.newV} , function (err, res) {
      response.send(`updated`)
   })
})


   module.exports = router