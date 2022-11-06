const express = require('express')
const router = express.Router()

router.get("/figures", async function (req, res) {
    res.json(['Rectangle', 'Square', 'Circle', 'Triangle'])
})

router.get("/units", async function (req, res) {
    res.json(['cm', 'dm', 'm', 'km'])
})

module.exports = router