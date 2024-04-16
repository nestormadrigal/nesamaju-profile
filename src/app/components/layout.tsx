import styles from './page.module.css';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CssBaseLine from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {
  useNavigate,
  Link as RouterLink,
  MemoryRouter,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Link from 'next/link';

interface Props {
  window?: () => Window;
  component?: React.ReactNode;
}

export default function Layout(props: Props) {
  const { window } = props;
  const profileName = 'Nestor Madrigal'; // make it dynamic potentially passing as a prop

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleDrawerToggle = function () {
    setMobileOpen((prevState) => !prevState);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    {
      pathname: '/',
      title: 'Profile',
    },
    {
      pathname: '/experience',
      title: 'Experience',
    },
    {
      pathname: '/education',
      title: 'Education',
    },
    {
      pathname: '/certifications',
      title: 'Education',
    },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        sx={{ mt: 2 }}
        variant="h5"
        color="text.primary"
        gutterBottom
        align="center"
      >
        {profileName}
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center">
        Software Engineer
      </Typography>

      <List>
        {navItems.map((page) => (
          <ListItem key={page.title}>
            <Link key={page.title} href={{ pathname: page.pathname }}>
              {page.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseLine />

      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'block' } }}
          >
            {profileName}
          </Typography>
          <Box sx={{ flexgrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((page) => (
              // <Link key={item} href={{ pathname: `/${item}` }}>
              //   {item}
              // </Link>
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                href={page.pathname}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
