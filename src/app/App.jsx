import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/'
import Home from '../pages/Home'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lazy } from 'react'
import Providers from './providers';
import EpisodePage from '../pages/EpisodePage/ui/EpisodePage';
const TitlePage = lazy(() => import('../pages/TitlePage'))
// const Catalog = lazy(() => import('../pages/Catalog'))
// const SearchList = lazy(() => import('../pages/Home/components/SearchList/SearchList'))
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'))
// const Player = lazy(() => import('../pages/TitlePage/ui/component/Player/Player'))

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
        element: <TitlePage />,
      },
      {
        path: '/favorites',
        element: <FavoritesPage /> 
      },
      {
        path: '/title/:id/episode/:number',
        element: <EpisodePage />
      },
      // {
      //   path: '/catalog',
      //   element: <Catalog />
      // },
      // {
      //   path: '/player/:id/:episode',
      //   element: <Player />
      // }
    ]
  }
])
const router = createBrowserRouter(routes, {
  basename: '/animew/',
})

function App() {
  return (
      <Providers>
        <RouterProvider router={router} />
      </Providers>
  )
}

export default App
