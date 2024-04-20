import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import Header from './Header';

function Layout(props){
    return(
        <>
        <Header />
        <Box sx={{ height:30 }}>

            <Box sx={{ display: 'flex' }}>
            {<props.Sidebar  />}
            <Box component="main" sx={{ flexGrow: 1, p:{xs:2,md:5}}}>
                <DrawerHeader/>
                <Breadcrumbs/>
                {props.children}
            </Box>
            </Box>
     
      </Box>
        
        </>
    )
}

export default Layout