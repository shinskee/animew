import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Providers from './providers';
import AppRoutes from './routes/ui/routes';

function App() {
  return (
      <Providers>
        <AppRoutes />
      </Providers>
  )
}

export default App
