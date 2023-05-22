import React from 'react';

// Material Components
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Stack,
  Avatar
} from '@mui/material';

// react-router-dom
import { useLocation, useNavigate } from 'react-router-dom';

// Image
// import defaultAvatar from '../../assets/defaultAvatar.png'

// Icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import StreamIcon from '@mui/icons-material/Stream';
// styles
import { makeStyles } from '@mui/styles';
// import useAuth from '../../hooks/useAuth';



export const drawerWidth = 250;

const useStyles = makeStyles({
  sideBarActive: {
    backgroundColor: '#f4f4f4',
    // borderRight: '3px solid #e53267',
    color: '#272F48'
    
  },
  sideBarActiveIcon: {
    color: '#e53267'
  }
})

function Sidebar({ handleDrawerToggle, mobileOpen }) {


  // const {user} = useAuth();

  const classes = useStyles();

  const location = useLocation();
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: "Problem 1",
      icon: <StreamIcon />,
      link: "/",
    },
    {
      label: "Problem 2",
      icon: <StreamIcon />,
      link: "/ProblemTwo",
    }

  ];

  const drawer = (
    <div
      style={{ paddingTop: "5px", paddingLeft: "10px", paddingRight: "10px" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "3.7rem",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="user image"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABv0lEQVR4Ae3UAWSUARjH4Tkz85mZcyZzzjBz5szJmTMkh5M5c87JfGaYDJNJOCfnSHIIIQmBASYwSUggCQnJQIBJIMAJw/UcPnLWrfvSwP14APjz8k6MG7Fx44rUuMKoJamzySyxekGPDUYtTZ6rLBCr2xyyyqil2KZOkr9ujQopopJUKDKsgCo15onVS3qUiFqnxxuGlWSdLEvEqsEROaKyHHGPYc0Qwmh3X6TMMheVpkyWqCXK5IjVAT06XNQtejwmqsIUFWJV4Zhtfq/JKwpElTlml6gaFbYZqQxp4v6BDIvE7htf+FM5rpPkvE75QexOeEfcPvOV2M0QELcZ+PcSFJilQMClNk2XEl3y/NcSlOiwRTAwoEmLFMu0aRCQYZVNpkmwxgZTpMlRZJ4aK+cNeEKDn6wPDHjORw7Zo80JTQ5YJcMONyiQZIeQKnM0CQhZHhzQ4i1nVBk8QZv31HjNd56xT78E+9ylTF+JLVIsUKPfHCGScpyxS5fBAQ/5xFNO6fCBaEDUPjdZJMEc0YBpDuh3jSKSJmnSYo8VHrDEfe7QZpY6jwipUiSqyCR1QrLkCeiXJ2SDBBPjxo37BWhbW/iXc1gbAAAAAElFTkSuQmCC"
          sx={{ width: 50, height: 50, }}
        />
        

        <Stack>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.primary", fontWeight: "bold" }}
          >
          Albanero
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <List sx={{ mt: 3 }}>
        {sideBarMenu.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            className={
              location.pathname === item.link ? classes.sideBarActive : null
            }
            onClick={() => {
              navigate(item.link);
              handleDrawerToggle(item.link);
            }}
          >
            <ListItemButton>
              <ListItemIcon
                className={
                  location.pathname === item.link
                    ? classes.sideBarActiveIcon
                    : null
                }
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>

    </Box>
  )

}





export default Sidebar;

