'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import logo from "../../public/logo.png"
import Image from 'next/image'
import InstagramIcon from '@mui/icons-material/Instagram';


const drawerWidth = 240;

const navItems = {
  gallery: {title: "Home", href : "/"},
  faq: {title: "FAQ", href : "/faq"},
  about: {title: "About", href : "/about"},
  contact: {title: "Connect", href : "/contact"},
}

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <div sx={{ my: 4, }}>
      <Image
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
          }}
          src={logo}
          alt='logo'
          loading="lazy"
        />
        <Typography variant="body" >
          ✽ B I R T H  W I T N E S S ✽
        </Typography>
      </div>
      <Divider />
      <List>
        {Object.entries(navItems).map(([key, value]) => (
          <ListItem key={value.title} disablePadding>
            <ListItemButton href={value.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={value.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <CssBaseline />
      <AppBar elevation={0} color='primary' component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
        </AppBar>
        <div>
        <Image
          style={{
            display: { xs: 'none', sm: 'block' },
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
          }}
          src={logo}
          alt='logo'
          loading="lazy"
        />
        </div>
        <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           ✽ B I R T H  W I T N E S S ✽
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Object.entries(navItems).map(([key, value]) => (
              <Button href={value.href} key={value.title} color='secondary'>
                {value.title}
              </Button>
            ))}
          </Box>
      
      <nav>
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
      </nav>
      
    </Box>
  );
}