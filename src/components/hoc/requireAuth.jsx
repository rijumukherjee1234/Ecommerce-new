import Sidebar from "../layout/Sidebar";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/Slices/authSlice";
// import Layout from "../layout/Layout";
import { Navigate } from 'react-router';
import Header from '../layout/Header';

// const token = useSelector(state => state.auth.token);

 const requireAuth = (Component) =>{
    // alert("AA")
    function AuthHoc(props){
        const { isLoggedIn} = useSelector(userSelector);
        console.log("Is logged in ?",isLoggedIn);

        return(
            isLoggedIn ? (
                // <Layout Sidebar={Sidebar}>
                //     <Component {...props}/>
                // </Layout>
                <>
                <Header/>
                <Sidebar/>
                </>
            ) : (
                <Navigate to="/" />
            )
        );
    }
return <AuthHoc/>

 };

 export default requireAuth;