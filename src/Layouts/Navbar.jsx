
import React from 'react';

// Material Components
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Stack,
} from '@mui/material'

// Image
// import logo from '../../assets/Images/brandLogo.png';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// NavTabs Components
// import Profile from './NavTabs/Profile';

const drawerWidth = 240;

const Navbar = ({ handleDrawerToggle }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: '#fff'
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          
            <MenuIcon />
          </IconButton>
          <Box sx={{
            color: 'black',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            {/* Left Box */}
            <Stack direction='row' justifyContent='center' alignItems='center' mr={1}>
              {/* <img src={logo} alt="BOI" width='120px' /> */}
            </Stack>

            {/* Right Box */}
            <Stack direction='row' spacing={-1} alignItems='center'>
              {/* <Profile /> */}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;