import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Bookings from './pages/Bookings'
import Registration from './components/Registration'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddRoom from './pages/owner/AddRoom'
import RoomList from './pages/owner/RoomList'

const App = () => {
  
  const isOwnerPath = useLocation().pathname.includes('owner')

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {false && <Registration />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/rooms/:id' element={<RoomDetail />} />
          <Route path='/my-bookings' element={<Bookings />} />
          <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<RoomList />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App