const { Router } = require('express')

const UsersController = {
    get router() {
        const router = Router()

        router.get('/', this.index)

        return router
    },

    index(req, res, next) {
        res.send('hi')
    }
}

module.exports = UsersController
