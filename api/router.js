const express = require('express');

const router = express.Router();

router.post('/test', async (req, res, next) => {
    try {
        const name = req.body.name
        const value = req.body.value
        if (typeof(value) !== 'number') {
            res.status(401).json({'message': 'Value has to be a number'})
        }
        if (typeof(name) !== 'string') {
            res.status(401).json({'message': 'Name has to be a string'})
        }
        for (let i = 0; i < name.length; i++) {
            if (name[i].charCodeAt() < 65) {
                res.status(401).json({'message': "Name can only contain letters"})
            } else if (name[i].charCodeAt() > 90 && name[i].charCodeAt() < 97) {
                res.status(401).json({'message': "Name can only contain letters"})
            } else if (name[i].charCodeAt() > 122) {
                res.status(401).json({'message': "Name can only contain letters"})
            }
        }
        let totalOfName = 0;
        for (let i = 0; i < name.length; i++) {
            totalOfName += name[i].charCodeAt()
        }
        totalOfName = totalOfName - value
        res.status(200).json(totalOfName)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;