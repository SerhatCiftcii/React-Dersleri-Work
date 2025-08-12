
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from './redux/slices/basketSlice'


function App() {
  const { products, drawer } = useSelector((store) => store.basket)
  const dispatch = useDispatch();
  return (
    <div>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />

        <Drawer className='drawer' onClose={() => dispatch(setDrawer())} sx={{ padding: '20px' }} anchor='right' open={drawer}>
          {products && products.map((product) => (
            <div className='flex-row' style={{ padding: '20px' }}>

              <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} alt="" />
              <p style={{ width: '300px', marginRight: '5px' }}>{product.title}({product.count})</p>
              <p style={{ fontWeight: 'bold', marginRight: '5px' }}>{product.price}</p>
              <button style={{ padding: '5x', border: 'none', color: 'red', width: '50px' }}>Sil</button>
            </div>
          ))}
        </Drawer>

      </PageContainer>


    </div>
  )
}

export default App
