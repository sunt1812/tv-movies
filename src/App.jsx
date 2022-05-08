import 'swiper/swiper.min.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss'
import Header from './components/header/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/footer/Footer'
import Catalog from './pages/Catalog'
import Detail from './pages/detail/Detail'
function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/:category/search/:keyword" element={<Catalog/>} ></Route>
        <Route exact path="/:category" element={<Catalog/>} ></Route>
        <Route exact path="/:category/:id" element={<Detail/>} ></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
