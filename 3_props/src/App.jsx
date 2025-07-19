import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {
  const [products, setProducts] = useState([
    { id: 1, productName: "Ayakkabı", price: 3200 },
    { id: 2, productName: "Tişört", price: 500 },
    { id: 3, productName: "Mont", price: 850 },
  ])

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Ürün Listesi</h2>
      {products.map(product => (
        <Product
          key={product.id}
          productName={product.productName}
          price={product.price}
        />


      ))}
      <br />
      <h2>Container Component</h2>
      <Container>
        <Product productName="Yeni" price={1200} />
      </Container>
      <p>Bu uygulama, ürün bilgilerini props kullanarak gösterir.</p>
    </div>

  )
}

export default App
