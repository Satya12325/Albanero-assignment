import React, { useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const DashboardLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (link) => {
    const { innerWidth: width } = window;
    // console.log('link from side bar----------', link)
    if (width < 600) {
      setMobileOpen(!mobileOpen);
    }
  }
  return (
    <>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <Box sx={{ height: '100vh', width: '98vw', position: 'absolute' }}>
        <Box p={2} sx={{
          width: { xs: '100vw', sm: `calc( 100vw - 240px)` },
          position: 'relative', left: { sm: '17rem' },top: { sm: '4rem'}
        }}>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default DashboardLayout;