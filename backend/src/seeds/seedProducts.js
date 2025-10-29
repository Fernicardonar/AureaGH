require('dotenv').config()
const mongoose = require('mongoose')
const Product = require('../models/Product.model')
const connectDB = require('../config/database')

const products = [
  // PRODUCTOS MUJER (12 productos)
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
    badge: 'Trending',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro']
  },
  {
    name: 'Conjunto Falda Gold',
    description: 'Hermoso conjunto con detalles dorados',
    price: 179900,
    originalPrice: 229900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP3.jpg',
    stock: 12,
    rating: 5.0,
    badge: 'Oferta',
    featured: true,
    onSale: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Dorado', 'Negro']
  },
  {
    name: 'Vestido Floral Primavera',
    description: 'Hermoso vestido con estampado floral',
    price: 189900,
    originalPrice: 249900,
    category: 'mujer',
    image: '/images/categories/Mujer/vestido 7.jpg',
    stock: 10,
    rating: 4.8,
    badge: 'Oferta',
    featured: true,
    onSale: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolor']
  },
  {
    name: 'Blusa Satinada Elegante',
    description: 'Blusa de satín con acabado brillante ideal para eventos',
    price: 159900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP1.jpg',
    stock: 18,
    rating: 4.3,
    badge: 'Nuevo',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Blanco', 'Negro']
  },
  {
    name: 'Falda Plisada Rosa',
    description: 'Falda plisada elegante para temporada',
    price: 149900,
    originalPrice: 199900,
    category: 'mujer',
    image: '/images/categories/Mujer/vestido 7.jpg',
    stock: 22,
    rating: 4.6,
    badge: 'Oferta',
    onSale: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Rosa']
  },
  {
    name: 'Chaqueta Chic Urbana',
    description: 'Chaqueta moderna para look casual urbano',
    price: 249900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP2.jpg',
    stock: 14,
    rating: 4.7,
    badge: '',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Negro']
  },
  {
    name: 'Pantalón Slim Fit',
    description: 'Pantalón ajustado de corte moderno',
    price: 169900,
    originalPrice: 219900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP3.jpg',
    stock: 25,
    rating: 4.4,
    badge: 'Oferta',
    onSale: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Azul']
  },
  {
    name: 'Top Velvet Noche',
    description: 'Top de terciopelo perfecto para salidas nocturnas',
    price: 129900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP1.jpg',
    stock: 30,
    rating: 4.2,
    badge: '',
    featured: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Vino', 'Negro']
  },
  {
    name: 'Cardigan Soft Comfort',
    description: 'Cardigan suave y cómodo para el día a día',
    price: 139900,
    originalPrice: 179900,
    category: 'mujer',
    image: '/images/categories/Mujer/vestido 7.jpg',
    stock: 28,
    rating: 4.5,
    badge: 'Oferta',
    onSale: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Gris', 'Beige']
  },
  {
    name: 'Jeans High Rise Skinny',
    description: 'Jeans de cintura alta con ajuste perfecto',
    price: 179900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP2.jpg',
    stock: 20,
    rating: 4.8,
    badge: 'Trending',
    featured: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azul']
  },
  {
    name: 'Kimono Breeze Verano',
    description: 'Kimono ligero ideal para clima cálido',
    price: 159900,
    originalPrice: 199900,
    category: 'mujer',
    image: '/images/categories/Destacados/TOP3.jpg',
    stock: 16,
    rating: 4.3,
    badge: 'Oferta',
    onSale: true,
    sizes: ['S', 'M', 'L'],
    colors: ['Floral']
  },

  // PRODUCTOS HOMBRE (12 productos)
  {
    name: 'Camiseta Grey Basic',
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
    name: 'Camiseta Pink Modern',
    description: 'Camiseta moderna en color rosa',
    price: 139900,
    originalPrice: 169900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET2.jpg',
    stock: 25,
    rating: 4.0,
    badge: 'Oferta',
    onSale: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Rosa']
  },
  {
    name: 'Camiseta Black Classic',
    description: 'Camiseta clásica negra esencial',
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
    name: 'Camisa Monet Elegante',
    description: 'Camisa elegante para hombre de corte slim',
    price: 159900,
    originalPrice: 199900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET5.jpg',
    stock: 18,
    rating: 4.5,
    badge: 'Oferta',
    featured: true,
    onSale: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanco', 'Azul']
  },
  {
    name: 'Camisa Oxford Formal',
    description: 'Camisa Oxford de corte formal ideal para oficina',
    price: 169900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET5.jpg',
    stock: 22,
    rating: 4.6,
    badge: '',
    featured: true,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Blanco', 'Celeste']
  },
  {
    name: 'Pantalón Chino Casual',
    description: 'Pantalón chino de corte casual cómodo',
    price: 189900,
    originalPrice: 239900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET1.jpg',
    stock: 20,
    rating: 4.4,
    badge: 'Oferta',
    onSale: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Beige', 'Negro']
  },
  {
    name: 'Chaqueta Denim Urban',
    description: 'Chaqueta de mezclilla estilo urbano',
    price: 249900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET2.jpg',
    stock: 15,
    rating: 4.7,
    badge: 'Trending',
    featured: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Azul']
  },
  {
    name: 'Hoodie Urban Comfort',
    description: 'Hoodie urbano cómodo para uso diario',
    price: 179900,
    originalPrice: 219900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET3.jpg',
    stock: 28,
    rating: 4.5,
    badge: 'Oferta',
    onSale: true,
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Negro', 'Gris']
  },
  {
    name: 'Polo Essential Fit',
    description: 'Polo esencial de corte regular',
    price: 129900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET1.jpg',
    stock: 32,
    rating: 4.2,
    badge: 'Nuevo',
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanco', 'Negro', 'Azul']
  },
  {
    name: 'Jogger Sport Active',
    description: 'Pantalón jogger deportivo para actividad física',
    price: 159900,
    originalPrice: 199900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET2.jpg',
    stock: 24,
    rating: 4.6,
    badge: 'Oferta',
    onSale: true,
    sizes: ['M', 'L', 'XL'],
    colors: ['Negro', 'Gris']
  },
  {
    name: 'Camisa Linen Fresh',
    description: 'Camisa de lino fresca para verano',
    price: 189900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET5.jpg',
    stock: 18,
    rating: 4.4,
    badge: '',
    sizes: ['M', 'L', 'XL'],
    colors: ['Blanco', 'Beige']
  },
  {
    name: 'Camiseta Graphic Street',
    description: 'Camiseta con diseño gráfico estilo urbano',
    price: 149900,
    originalPrice: 189900,
    category: 'hombre',
    image: '/images/categories/Hombre/MONET3.jpg',
    stock: 26,
    rating: 4.3,
    badge: 'Oferta',
    onSale: true,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro', 'Blanco']
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
    console.log(`✅ ${products.length} productos creados exitosamente`)
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

seedProducts()
