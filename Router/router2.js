const express = require('express')

const route = express.Router()

const {createZones} = require("../controller/zoneController")

route.post("/:personId/zones", createZones)


module.exports = route