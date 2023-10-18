import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/SIdebar';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Promote from './pages/Promote';
import Income from './pages/Income';
import Help from './pages/Help';
import Customers from './pages/Customers';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
    <Header OpenSidebar={OpenSidebar}/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='promote' element={<Promote/>}/>
      <Route path='income' element={<Income/>}/>
      <Route path='help' element={<Help/>}/>
      <Route path='customers' element={<Customers/>}/>
    </Routes>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    </div>
  );
}

export default App;
