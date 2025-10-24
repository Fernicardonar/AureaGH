import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Mi Cuenta</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {user?.nombre?.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-xl font-bold text-gray-800">{user?.nombre}</h2>
                <p className="text-gray-600">{user?.email}</p>
              </div>
              <hr className="mb-4" />
              <nav className="space-y-2">
                <a href="#" className="block py-2 px-4 rounded-md bg-primary text-white">
                  <i className="fas fa-user mr-2"></i>
                  Perfil
                </a>
                <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-100">
                  <i className="fas fa-shopping-bag mr-2"></i>
                  Mis Pedidos
                </a>
                <a href="#" className="block py-2 px-4 rounded-md hover:bg-gray-100">
                  <i className="fas fa-heart mr-2"></i>
                  Favoritos
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información Personal</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                  <input
                    type="text"
                    value={user?.nombre || ''}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                  <input
                    type="tel"
                    value={user?.telefono || 'No registrado'}
                    readOnly
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pedidos Recientes</h2>
              <div className="text-center py-8 text-gray-500">
                <i className="fas fa-shopping-bag text-4xl mb-3"></i>
                <p>No tienes pedidos registrados aún</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
