import { useState } from "react";
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@mui/material';
import usePostRequest from "../common/customePostApiCall";
import { API_URL,apiBus } from "../common/endpoints";
import { toast } from 'react-toastify';

export default function Login() {

const {postData } = usePostRequest(API_URL+apiBus.login_api);

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async () => {      
           
        postData({ username, password })
         .then((res) =>{
            if(res.status == '200'){
                toast.success("Login Successfull!")
            }
            
         }).catch((err) =>{
            console.log(err)
            toast.error("Login Failed")
         })
      
        
        
};


return(
 <>

<div style={{ display: 'grid', placeItems: 'center',marginTop:'8rem'}}>
    <Paper  style={{height: '300px', width: '350px',background: '#fff',padding: '3rem' }}>

    <div style={{display:'flex', flexDirection:'column',justifyContent:'center'}} >
    <Typography variant='h5' style={{textAlign:'center'}}>Login</Typography>

    <TextField label='Username' margin='normal'
    value={username} onChange={(e) => setUsername(e.target.value)}/>

    <TextField label='Password' margin='normal' type='password'
     value={password} onChange={(e) => setPassword(e.target.value)}/>

    <Button variant='contained' color='primary' style={{ marginTop: '20px',width:'100px',marginLeft:'auto',marginRight:'auto' }} 
     onClick={handleLogin}>
                Login
    </Button>
    {/* {error && <Typography variant="body2" color="error">Invalid credentials</Typography>} */}
    </div>
    </Paper>
</div>
 
 </>
)
}
