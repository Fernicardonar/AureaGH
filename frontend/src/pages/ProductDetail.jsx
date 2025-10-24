import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../services/productService'
import { useCart } from '../context/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleWhatsApp = () => {
    const telefono = "573006003786"
    const mensaje = `Hola, estoy interesado/a en el producto: *${product.name}* por $${product.price.toLocaleString('es-CO')}. Cantidad: ${quantity}. ¿Está disponible?`
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`
    window.open(url, "_blank")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
          <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <nav className="mb-8 text-gray-600">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <span className="mx-2">/</span>
          <Link to={`/${product.category}`} className="hover:text-primary capitalize">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <img 
              src={product.image || '/images/placeholder.jpg'} 
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            {product.badge && (
              <span className="inline-block bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, index) => (
                <i 
                  key={index}
                  className={`fas fa-star ${
                    index < Math.floor(product.rating || 4) 
                      ? 'text-yellow-400' 
                      : 'text-gray-300'
                  }`}
                ></i>
              ))}
              <span className="text-gray-600 ml-2">({product.rating || 4.0})</span>
            </div>

            <div className="mb-6">
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through mr-3">
                  ${product.originalPrice.toLocaleString('es-CO')}
                </span>
              )}
              <span className="text-4xl font-bold text-primary">
                ${product.price.toLocaleString('es-CO')}
              </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description || 'Producto de alta calidad y diseño exclusivo. Perfecto para cualquier ocasión.'}
            </p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Cantidad</label>
              <div className="flex items-center border border-gray-300 rounded-md w-max">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleAddToCart}
                className="w-full btn btn-primary"
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Agregar al Carrito
              </button>
              <button 
                onClick={handleWhatsApp}
                className="w-full btn bg-green-500 text-white hover:bg-green-600"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Comprar por WhatsApp
              </button>
            </div>

            {/* Product Details */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-bold mb-4">Detalles del Producto</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Categoría:</strong> <span className="capitalize">{product.category}</span></li>
                <li><strong>SKU:</strong> {product.sku || 'N/A'}</li>
                <li><strong>Disponibilidad:</strong> <span className="text-green-600">En stock</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
