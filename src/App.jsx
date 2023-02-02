import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Loading from './components/loading/Loading';
import ErrorPage from './components/error/ErrorPage';
import ScrollUp from './components/scroll-up/ScrollUp';

const Reservation = lazy(() => import('./components/reservation/Reservation'));
const Menu = lazy(() => import('./components/menu/Menu'));
const Layout = lazy(() => import('./components/layout/Layout'));
const Home = lazy(() => import('./components/home/Home'));
const About = lazy(() => import('./components/about/About'));
const Cart = lazy(() => import('./components/cart/Cart'));
const HowWorks = lazy(() => import('./components/how-works/HowWorks'));

function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/how-works' element={<HowWorks />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
        <ScrollUp />
      </Suspense>
    </>
  )
}

export default App
