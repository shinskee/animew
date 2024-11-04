import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from '../pages/Home'
import authenticate from '../shared/auth/authenticate'
import { lazy } from 'react'
const TitlePage = lazy(() => import('../pages/TitlePage'))
const Catalog = lazy(() => import('../pages/Catalog'))
const SearchList = lazy(() => import('../pages/Home/components/SearchList/SearchList'))
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))

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
