import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ mx: 5, ml:50 }}>
                        <a  style={{color: "white"}} href="/shop">Shop</a>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mx: 5}}>
                        <a  style={{color: "white"}} href="/orders">Order Review</a>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ mx: 5 }}>
                        <a style={{color: "white"}} href="/inventory">Inventory</a>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;