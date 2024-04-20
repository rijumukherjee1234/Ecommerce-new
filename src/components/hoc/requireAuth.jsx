import Sidebar from "../layout/Sidebar";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/Slices/authSlice";
import Layout from "../layout/Layout";
import { Navigate } from 'react-router';

// const token = useSelector(state => state.auth.token);

 const requireAuth = (Component) =>{
    // alert("AA")
    function AuthHoc(props){
        const { isLoggedIn} = useSelector(userSelector);
        console.log(isLoggedIn);

//         return(
//             isLoggedIn ? (
//                 <Layout Sidebar={Sidebar}>
//                     <Component {...props}/>
//                 </Layout>
//             ) : (
//                 <Navigate to="/" />
//             )
//         );
    }
// return <AuthHoc/>

 };

 export default requireAuth;