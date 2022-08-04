import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Basket from './Pages/Basket'
import Categories from './Pages/Categories'
import CategoryProducts from './Pages/CategoryProducts'
import NotFound from './Pages/NotFound'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'

function App() {
  return (
    <>
      <Header />
      <main>
      <Routes>
        
        <Route path='/products' element={<Products />} />
        <Route path= '/products/:id' element= {<ProductDetails/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path= '/categories/:id' element= {<CategoryProducts/>} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>


      </main>
    </>
  )
}

export default App



      
 