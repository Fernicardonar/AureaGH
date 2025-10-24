import { Link } from 'react-router-dom'
import { useState } from 'react'
import { subscribeNewsletter } from '../../services/generalService'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = async (e) => {
    e.preventDefault()
    try {
      await subscribeNewsletter(email)
      setMessage('¡Gracias por suscribirte!')
      setEmail('')
      setTimeout(() => setMessage(''), 3000)
    } catch (error) {
      setMessage('Error al suscribirse. Intenta de nuevo.')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Liliam Boutique</h3>
            <p className="text-gray-400 mb-4">
              Tu destino para la moda exclusiva y las últimas tendencias. Estilo, elegancia y calidad en cada prenda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Inicio</Link></li>
              <li><Link to="/mujer" className="text-gray-400 hover:text-white transition">Mujer</Link></li>
              <li><Link to="/hombre" className="text-gray-400 hover:text-white transition">Hombre</Link></li>
              <li><Link to="/destacados" className="text-gray-400 hover:text-white transition">Destacados</Link></li>
              <li><Link to="/promociones" className="text-gray-400 hover:text-white transition">Promociones</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <i className="fas fa-phone mr-3"></i>
                <span>+57 300 600 3786</span>
              </div>
              <div className="flex items-center text-gray-400">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@liliamboutique.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Suscríbete para recibir ofertas exclusivas</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email..."
                required
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="w-full btn btn-primary">
                Suscribirse
              </button>
              {message && (
                <p className="text-sm text-green-400">{message}</p>
              )}
            </form>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="text-center text-gray-400">
          <p>&copy; 2024 Liliam Boutique. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
