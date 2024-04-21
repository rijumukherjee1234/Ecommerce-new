import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/Slices/authSlice';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector(userSelector);

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const handleDrawer = () => {
    dispatch(setDrawer());
  };
  const setMobileDrawer = () => {};

  return (
    <Box>
      <AppBar position='fixed' style={{display:'flex',flexDirection:"row",zIndex: '-1',paddingLeft: '250px',backgroundColor:"#fff",justifyContent:'space-between'}}>
      
        <Toolbar>
          <MenuIcon style={{color:'red'}}/>
        </Toolbar>
        
        <div style={{display:'flex',flexDirection:"row"}}>
        <Toolbar>
          
        <Box>
          <IconButton size='large' aria-label='Mode' color='inherit' className='mr-1'></IconButton>
          
          <Tooltip title='Open settings'>
            <IconButton className='mr-2' sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' />
            </IconButton>
          </Tooltip>
        </Box>
      
        <Box>
        <IconButton size='large' aria-label='show 17 new notifications' color='inherit' className='mr-2'>
            <Badge badgeContent={1} color='error'>
              <NotificationsIcon style={{color:'#ed5045'}}/>
            </Badge>
          </IconButton>
        </Box>
        </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}

export default Header;
