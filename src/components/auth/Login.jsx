import { useState } from "react";
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../redux/Slices/authSlice";
import usePostRequest from "../common/customePostApiCall";
import { useNavigate } from "react-router-dom";

export default function Login() {
const dispatch = useDispatch();
const navigate = useNavigate();

const state = useSelector(state => state)


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = (e) => {   
    e.preventDefault();   
       
            dispatch(login({ username, password }))
            .then((res => {
                console.log("res:",res.type)
                if(res.type=='auth/login/fulfilled'){
                    console.log("res:",res)
                    toast.success("Login Successfull!")
                    navigate('/dashboard');
                }
                else{
                    toast.error(res.error.message)
                    navigate('/dashboard');
                }
            
            }))
            
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
