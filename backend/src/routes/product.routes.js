const express = require('express')
const router = express.Router()
const { protect, admin } = require('../middleware/auth.middleware')
const {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getFeaturedProducts,
  getPromotions,
  searchProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller')

// Rutas públicas
router.get('/', getAllProducts)
router.get('/search', searchProducts)
router.get('/featured', getFeaturedProducts)
router.get('/promotions', getPromotions)
router.get('/category/:category', getProductsByCategory)
router.get('/:id', getProductById)

// Rutas protegidas (Admin)
router.post('/', protect, admin, createProduct)
router.put('/:id', protect, admin, updateProduct)
router.delete('/:id', protect, admin, deleteProduct)

module.exports = router
