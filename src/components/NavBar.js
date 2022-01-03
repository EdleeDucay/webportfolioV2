import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import menuItems from '../jsons/menuItems.json'
import { Drawer, List, ListItem, ListItemText, useScrollTrigger } from '@mui/material';
import { Slide } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


export default function NavBar(props) {
  const [drawer, setDrawer] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open)
  }

  const handleBookmarks = (bookmark) => {
    console.log('here', bookmark)
  }

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(menuItem => {
                const {menuTitle, bookmark} = menuItem
                return (
                  <ListItem button key={menuTitle}>
                  <ListItemText primary={menuTitle} onClick={() => handleBookmarks(bookmark)}/>
                  </ListItem>

                )
              })}
      </List>     
    </Box>      
  );      

  return (
    <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll {...props}>
      <AppBar >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ ml: 2,display: { xs: 'block', sm: 'block' } }}
          >
            Edlee Ducay
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          
            {menuItems.map(menuItem => {
              const {menuTitle, bookmark} = menuItem
              return (
                <MenuItem>
                <Typography onClick={() => handleBookmarks(bookmark)}>
                  {menuTitle}
                </Typography>
                </MenuItem>

              )
            })}
            
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
          </Box>
        </Toolbar>
      </AppBar>
      </HideOnScroll>

      <Drawer
              anchor={'right'}
              open={drawer}
              onClose={toggleDrawer(false)}>
                {renderMobileMenu}
      </Drawer>

    </Box>
  );
}
