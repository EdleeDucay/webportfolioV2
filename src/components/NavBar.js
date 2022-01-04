import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import menuItems from '../jsons/menuItems.json'
import { Drawer, List, ListItem, ListItemText, useScrollTrigger } from '@mui/material';
import { Slide } from '@mui/material';
import {useStyles} from '../styles/styles'

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
  const classes = useStyles()
  const [drawer, setDrawer] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open)
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
                  <ListItem  key={menuTitle} className={classes.navHover}>
                    <a href={bookmark} className={classes.navHover}>
                      {menuTitle}
                    </a>
                  </ListItem>
                )
              })}
      </List>     
    </Box>      
  );      

  return (
    <Box 
      sx={{ flexGrow: 1 }}
    >
        <HideOnScroll {...props}>
      <AppBar 
        className={classes.nav}
      >
        <Toolbar >
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
                <MenuItem className={classes.navHover}>
                <a href={bookmark} className={classes.navHover}>
                  {menuTitle}
                </a>
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
              classes={{ paper: classes.paper}}
              onClose={toggleDrawer(false)}>
                {renderMobileMenu}
      </Drawer>
      <Toolbar/>

    </Box>
  );
}
