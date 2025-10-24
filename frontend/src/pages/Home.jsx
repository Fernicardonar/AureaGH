import { Link } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  const { products, loading } = useProducts()

  const featuredProducts = products.filter(p => p.featured).slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-primary to-gray-800 flex items-center">
        <div className="container-custom text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Estilo y Elegancia</h1>
          <p className="text-xl md:text-2xl mb-8">Descubre con nosotros las últimas tendencias en moda</p>
          <Link to="/destacados" className="btn bg-white text-primary hover:bg-gray-100">
            Ver Colección
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Categorías</h2>
            <p className="text-gray-600">Explora nuestras colecciones exclusivas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard 
              image="/images/categories/Mujer/vestido 7.jpg"
              title="Mujer"
              link="/mujer"
            />
            <CategoryCard 
              image="/images/categories/Hombre/MONET5.jpg"
              title="Hombre"
              link="/hombre"
            />
            <CategoryCard 
              image="/images/categories/Accesorios/Zapatos Hombre.jpg"
              title="Accesorios"
              link="/accesorios"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Productos Destacados</h2>
            <p className="text-gray-600">Los favoritos de la temporada</p>
          </div>
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Link to="/destacados" className="btn btn-primary">
              Ver Todos los Destacados
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/categories/Sedes/Tienda 1.jpg" 
                alt="Liliam Boutique"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Sobre Liliam Boutique</h2>
              <p className="text-gray-600 mb-4">
                Somos una boutique especializada en moda exclusiva para hombres y mujeres que buscan destacar con estilo y elegancia. Nuestra pasión por la moda nos impulsa a seleccionar cuidadosamente cada prenda.
              </p>
              <p className="text-gray-600 mb-4">
                Con más de 10 años de experiencia en el sector, nos hemos convertido en la referencia de moda en la región, ofreciendo las últimas tendencias y piezas únicas que no encontrarás en ningún otro lugar.
              </p>
              <p className="text-gray-600 mb-6">
                Creemos que la moda es una forma de expresar tu personalidad, por eso cada prenda de nuestra colección está pensada para que te sientas único y seguro de ti mismo.
              </p>
              <Link to="/contacto" className="btn btn-primary">
                Conoce más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stores Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestras Tiendas</h2>
            <p className="text-gray-600">Visítanos en nuestras tiendas físicas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/categories/Sedes/sede2.png" 
                alt="Tienda Principal"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Tienda Principal</h3>
                <div className="space-y-3 text-gray-600">
                  <p><i className="fas fa-clock mr-3 text-primary"></i>Lunes a Sábado: 10:00 AM - 7:00 PM</p>
                  <p><i className="fas fa-map-marker-alt mr-3 text-primary"></i>Cra 50 #52-13, Bello, Antioquia</p>
                  <p><i className="fas fa-phone mr-3 text-primary"></i>+57 604 4736501</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="/images/categories/Sedes/sede1.png" 
                alt="Sucursal Puerta del Norte"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Sucursal CC Puerta del Norte</h3>
                <div className="space-y-3 text-gray-600">
                  <p><i className="fas fa-clock mr-3 text-primary"></i>Lunes a Domingo: 11:00 AM - 9:00 PM</p>
                  <p><i className="fas fa-map-marker-alt mr-3 text-primary"></i>Dg 55 #34-67 Local 1149, Bello</p>
                  <p><i className="fas fa-phone mr-3 text-primary"></i>+57 604 4531552</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
