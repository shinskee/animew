import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from '../pages/Home'
import TitlePage from '../pages/TitlePage'
import FavoritesPage from '../pages/FavoritesPage'
import SearchList from '../pages/Home/components/SearchList/SearchList'
import authenticate from '../shared/auth/authenticate'
import Catalog from '../pages/Catalog'

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
      {
        path: '/search',
        element: <SearchList /> 
      },
      {
        path: '/catalog',
        element: <Catalog />
      },
    ]
  }
])
const router = createBrowserRouter(routes, {
  basename: '/animew-only-react-not-lib/'
})

function App() {
  authenticate()
  
  return (
      <RouterProvider router={router} />
  )
}

export default App
