import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from '../pages/Home'
import TitlePage from '../pages/TitlePage'
import { AuthProvider } from '../shared/auth/AuthContext'
import FavoritesPage from '../pages/FavoritesPage'


const routes = ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home /> 
      },
      {
        path: '/title/:id',
        element: <TitlePage /> 
      },
      {
        path: '/favorites',
        element: <FavoritesPage /> 
      },
    ]
  }
])
const router = createBrowserRouter(routes, {
  basename: '/animew/'
})

function App() { 
  return (
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
  )
}

export default App
