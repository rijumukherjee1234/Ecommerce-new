import { useSelector } from "react-redux";
import { userSelector } from "../../redux/Slices/authSlice";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(){
    const [anchorEl, setAnchorEl] = useState(null);
    const { user } = useSelector(userSelector);

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    const handleDrawer = () => {
        dispatch(setDrawer());
      };
      const setMobileDrawer = () =>{

      }



return(
    <Box>
        <AppBar position='fixed'>
        <Toolbar>
        <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            className='gap-[10px] mr-2 hidden md:flex '
            onClick={handleDrawer}>
            <MenuIcon />
          </IconButton>

          <IconButton
            id='mobile-icon'
            className='gap-[10px] flex md:hidden mr-2 '
            color='inherit'
            aria-label='open drawer'
            edge='start'>
            <MenuIcon />
          </IconButton>


        </Toolbar>
        <Box>
            <IconButton size='large' aria-label='Mode' color='inherit' className='mr-1' onClick={handleMode}>
             
            </IconButton>
            <IconButton size='large' aria-label='show 17 new notifications' color='inherit' className='mr-2'>
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Tooltip title='Open settings'>
              <IconButton className='mr-2' sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' />
              </IconButton>
            </Tooltip>
          </Box>
        </AppBar>
    </Box>
)
}

export default Header;