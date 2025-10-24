const Product = require('../models/Product.model')

// @desc    Obtener todos los productos
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ active: true })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error: error.message })
  }
}

// @desc    Obtener producto por ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener producto', error: error.message })
  }
}

// @desc    Obtener productos por categoría
// @route   GET /api/products/category/:category
// @access  Public
exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ 
      category: req.params.category.toLowerCase(),
      active: true 
    })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error: error.message })
  }
}

// @desc    Obtener productos destacados
// @route   GET /api/products/featured
// @access  Public
exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ featured: true, active: true })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos destacados', error: error.message })
  }
}

// @desc    Obtener promociones
// @route   GET /api/products/promotions
// @access  Public
exports.getPromotions = async (req, res) => {
  try {
    const products = await Product.find({ onSale: true, active: true })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener promociones', error: error.message })
  }
}

// @desc    Buscar productos
// @route   GET /api/products/search?q=query
// @access  Public
exports.searchProducts = async (req, res) => {
  try {
    const { q } = req.query
    const products = await Product.find({
      $text: { $search: q },
      active: true
    })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar productos', error: error.message })
  }
}

// @desc    Crear producto (Admin)
// @route   POST /api/products
// @access  Private/Admin
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error: error.message })
  }
}

// @desc    Actualizar producto (Admin)
// @route   PUT /api/products/:id
// @access  Private/Admin
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error: error.message })
  }
}

// @desc    Eliminar producto (Admin)
// @route   DELETE /api/products/:id
// @access  Private/Admin
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    
    if (product) {
      res.json({ message: 'Producto eliminado' })
    } else {
      res.status(404).json({ message: 'Producto no encontrado' })
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error: error.message })
  }
}
