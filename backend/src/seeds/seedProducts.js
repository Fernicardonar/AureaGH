require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('../models/Product.model')
const connectDB = require('../config/database')

const products = [
  {
    name: 'Vestido Negro Elegance',
    description: 'Elegante vestido negro perfecto para ocasiones especiales',
    price: 269900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP1.jpg',
    stock: 15,
    rating: 4.5,
    badge: 'Nuevo',
    featured: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Negro']
  },
  {
    name: 'Conjunto Casual Black',
    description: 'Conjunto casual moderno para el día a día',
    price: 229900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP2.jpg',
    stock: 20,
    rating: 4.0,
    badge: 'Nuevo',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro']
  },
  {
    name: 'Conjunto Falda Gold',
    description: 'Hermoso conjunto con detalles dorados',
    price: 179900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP3.jpg',
    stock: 12,
    rating: 5.0,
    badge: 'Nuevo',
    featured: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Dorado', 'Negro']
  },
  {
    name: 'Camiseta Grey',
    description: 'Camiseta básica de alta calidad',
    price: 139900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET1.jpg',
    stock: 30,
    rating: 4.3,
    badge: 'Trending',
    featured: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Gris']
  },
  {
    name: 'Camiseta Pink',
    description: 'Camiseta moderna en color rosa',
    price: 139900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET2.jpg',
    stock: 25,
    rating: 4.0,
    badge: 'Nuevo',
    featured: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Rosa']
  },
  {
    name: 'Camiseta Black',
    description: 'Camiseta clásica negra',
    price: 139900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET3.jpg',
    stock: 35,
    rating: 4.0,
    badge: 'Nuevo',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro']
  },
  {
    name: 'Vestido Floral',
    description: 'Hermoso vestido con estampado floral',
    price: 189900,
    originalPrice: 249900,
    category: 'mujer',
    image: '/images/categories/Mujer/vestido 7.jpg',
    stock: 10,
    rating: 4.8,
    badge: 'Oferta',
    onSale: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolor']
  },
  {
    name: 'Camisa Monet',
    description: 'Camisa elegante para hombre',
    price: 159900,
    originalPrice: 199900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET5.jpg',
    stock: 18,
    rating: 4.5,
    badge: 'Oferta',
    onSale: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanco', 'Azul']
  }
]

const seedProducts = async () => {
  try {
    await connectDB()
    
    // Limpiar productos existentes
    await Product.deleteMany()
    console.log('🗑️  Productos anteriores eliminados')
    
    // Insertar nuevos productos
    await Product.insertMany(products)
    console.log('✅ Productos creados exitosamente')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

seedProducts()
