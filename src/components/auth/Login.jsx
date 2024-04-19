import { useState } from "react";
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@mui/material';


export default function Login() {
return(
 <>

<div style={{ display: 'grid', placeItems: 'center',marginTop:'8rem'}}>
    <Paper  style={{height: '300px', width: '350px',background: '#fff',padding: '3rem' }}>

    <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}} >
    <Typography variant='h5' style={{textAlign:'center'}}>Login</Typography>

    <TextField label='Username' margin='normal'/>
    <TextField label='Password' margin='normal' type='password'/>

    <Button variant='contained' color='primary' style={{ marginTop: '20px',width:'100px',marginLeft:'auto',marginRight:'auto' }} >
                Login
    </Button>
    </div>
    </Paper>
</div>
 
 
 </>
)
}
