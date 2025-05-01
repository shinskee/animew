import { lazy, memo, useCallback } from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Layout from '../../Layout'
import Home from '../../../pages/Home'
import { useSelector } from 'react-redux'
import { getCurrentEpisodeName } from '../../../entities/Episodes/EpisodesPreview'
import { getTitleName } from '../../../entities/Title/TitleDescription'
const TitlePage = lazy(() => import('../../../pages/TitlePage'))
const FavoritesPage = lazy(() => import('../../../pages/FavoritesPage'))
const EpisodePage = lazy(() => import('../../../pages/EpisodePage'))

const AppRoutes = memo( () => {
  const episodeName = useSelector(getCurrentEpisodeName)
  const titleName = useSelector(getTitleName)
  
  const getDynamicPathForTitle = useCallback(({pathname, data}) => {
    return <Link to={pathname}>{data}</Link>
  }, [])

  const getDynamicPathForEpisode = useCallback(({pathname, data, params}) => {
    return (
      <div>
        <div>
          <Link to={`/title/${params.id}`}>{data.titleName}</Link>
        </div>
        <div>
          <Link to={pathname}>{data.episodeName}</Link>
        </div>
      </div>
    )
  }, [])

  const routes = ([
    {
      path: '/',
      element: <Layout />,
      handle: {
        crumb: <Link to="/">Главная</Link>,
      },
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/title/:id/*',
          element: <TitlePage />,
          loader: () => titleName,
          handle: {
            crumb: getDynamicPathForTitle,
          },
        },
        {
          path: '/favorites',
          element: <FavoritesPage /> 
        },
        {
          path: '/title/:id/episode/:number',
          element: <EpisodePage />,
          loader: () => {
            return {episodeName, titleName}
          },
          handle: {
            crumb: getDynamicPathForEpisode,
          }
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
    return (
      <RouterProvider router={router} />
    )
  })
  
  export default AppRoutes