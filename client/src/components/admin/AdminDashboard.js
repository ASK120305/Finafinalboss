import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Tabs,
  Tab,
  Paper,
  useMediaQuery,
  useTheme,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MenuManagement from './MenuManagement';
import UserManagement from './UserManagement';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      width: 250,
      height: '100%',
      backgroundColor: 'rgba(25, 118, 210, 0.85)',
      color: 'white',
      padding: '1rem'
    }}>
      <List>
        <ListItem button onClick={() => handleTabChange(null, 0)}>
          <ListItemIcon>
            <MenuBookIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Menu Management" />
        </ListItem>
        <ListItem button onClick={() => handleTabChange(null, 1)}>
          <ListItemIcon>
            <PeopleIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="User Management" />
        </ListItem>
        <ListItem button onClick={() => handleTabChange(null, 2)}>
          <ListItemIcon>
            <AssessmentIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80)', // Modern office interior
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)', // Slightly lighter overlay
        zIndex: 0
      }
    }}>
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ 
        backgroundColor: 'rgba(25, 118, 210, 0.85)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Admin Dashboard
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
              Welcome, {user?.name}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
              sx={{
                backgroundColor: 'rgba(156, 39, 176, 0.9)',
                '&:hover': {
                  backgroundColor: 'rgba(156, 39, 176, 1)'
                }
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 250,
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Main Content */}
      <Container sx={{ 
        mt: 4, 
        position: 'relative', 
        zIndex: 1,
        padding: isMobile ? '1rem' : '2rem'
      }}>
        <Paper sx={{ 
          p: isMobile ? 2 : 3, 
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          {!isMobile && (
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange} 
              sx={{ 
                mb: 3,
                '& .MuiTab-root': {
                  color: 'rgba(0, 0, 0, 0.7)',
                  '&.Mui-selected': {
                    color: 'primary.main',
                    fontWeight: 'bold'
                  }
                }
              }}
            >
              <Tab label="Menu Management" />
              <Tab label="User Management" />
              <Tab label="Reports" />
            </Tabs>
          )}

          <Box sx={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '8px',
            p: 2
          }}>
            {activeTab === 0 && <MenuManagement />}
            {activeTab === 1 && <UserManagement />}
            {activeTab === 2 && (
              <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                Reports - Coming Soon
              </Typography>
            )}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AdminDashboard; 