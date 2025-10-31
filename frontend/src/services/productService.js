import api from './api'

export const getAllProducts = async () => {
  const response = await api.get('/products')
  return response.data
}

export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`)
  return response.data
}

export const getProductsByCategory = async (category) => {
  const response = await api.get(`/products/category/${category}`)
  return response.data
}

export const getFeaturedProducts = async () => {
  const response = await api.get('/products/featured')
  return response.data
}

export const getPromotions = async () => {
  const response = await api.get('/products/promotions')
  return response.data
}

export const searchProducts = async (query) => {
  const response = await api.get(`/products/search?q=${query}`)
  return response.data
}

export const addReview = async (productId, { rating, comment }) => {
  const response = await api.post(`/products/${productId}/reviews`, { rating, comment })
  return response.data
}

export const toggleFavorite = async (productId) => {
  const response = await api.post(`/products/${productId}/favorite`)
  return response.data
}
