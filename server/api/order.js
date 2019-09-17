const router = require('express').Router()
const {Book} = require('../db/models/')
const {Order} = require('../db/models/')
const {User} = require('../db/models/')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findAll({
        include: [Book, User],
        where: {
          userId: req.user.id
        }
      })
      res.json(order)
    }
  } catch (error) {
    next(error)
  }
})

//POST: api/order/
router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      const addToCart = await Order.create({
        userId: req.user.id,
        bookId: req.body.id,
        quantity: req.body.quantity || 1,
        price: req.body.price
      })
      res.json(addToCart)
    }
  } catch (error) {
    next(error)
  }
})

//PUT: api/order/checkout
router.put('/checkout', async (req, res, next) => {
  try {
    if (req.user) {
      const checkout = await Order.Update({
        isPurchased: true,
        where: {
          userId: req.user.id
        }
      })
      res.json(checkout)
    }
  } catch (error) {
    next(error)
  }
})